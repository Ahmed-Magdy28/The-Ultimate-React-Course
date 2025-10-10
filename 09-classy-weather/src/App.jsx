import { Component } from 'react';
import { convertToFlag, formatDay, getWeatherIcon } from './logic/helper';

class App extends Component {
   state = {
      location: '',
      isLoading: false,
      displayLocation: '',
      weather: {},
   };

   componentDidMount() {
      localStorage.getItem('location') &&
         this.setState({ location: localStorage.getItem('location') || '' });
      // this.fetchWeather();
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevState.location !== this.state.location) {
         localStorage.setItem('location', this.state.location);
         this.fetchWeather();
      }
   }

   handleInputChange = (event) => {
      this.setState({ location: event.target.value });
      // this.fetchWeather();
   };

   fetchWeather = async () => {
      if (!this.state.location || this.state.location.length < 3)
         return this.setState({ weather: {} });
      try {
         this.setState({ isLoading: true });
         // 1) Getting location (geocoding)
         const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
         );
         const geoData = await geoRes.json();
         // console.log(geoData);

         if (!geoData.results) throw new Error('Location not found');

         const { latitude, longitude, timezone, name, country_code } =
            geoData.results.at(0);
         this.setState({
            ...this.state,
            displayLocation: `${name} ${convertToFlag(country_code)}`,
         });

         // 2) Getting actual weather
         const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
         );
         const weatherData = await weatherRes.json();
         this.setState({
            weather: weatherData.daily,
            country_code: country_code,
         });
      } catch (err) {
         if (err.message === 'Location not found') {
            // alert('Location not found! Please try again.');
            // this.setState({ location: '' });
         } else console.error(err);
      } finally {
         this.setState({ isLoading: false });
      }
   };

   render() {
      return (
         <div className="app">
            <h1>Classy Weather</h1>
            <div>
               <input
                  type="text"
                  placeholder="Search from location ...."
                  value={this.state.location}
                  onChange={(e) => this.handleInputChange(e)}
               />
            </div>
            {/* <button className="btn" onClick={this.fetchWeather}>
               Get Weather
            </button> */}
            {this.state.isLoading && <p className="loader">Loading....</p>}
            {this.state.weather.weathercode && (
               <Weather
                  weather={this.state.weather}
                  displayLocation={this.state.displayLocation}
                  location={this.state.location}
               />
            )}
         </div>
      );
   }
}

export default App;

class Weather extends Component {
   componentWillUnmount() {}

   render() {
      const {
         temperature_2m_max: max,
         temperature_2m_min: min,
         time: dates,
         weathercode: codes,
      } = this.props.weather;
      const location = this.props.location;
      const displayLocation = this.props.displayLocation;
      return (
         <div>
            <h2>Weather in {!displayLocation ? location : displayLocation}</h2>
            <ul className="weather">
               {dates.map((date, index) => (
                  <Day
                     date={date}
                     max={max.at(index)}
                     min={min.at(index)}
                     code={codes.at(index)}
                     key={date}
                     isToday={index === 0}
                  />
               ))}
            </ul>
         </div>
      );
   }
}

class Day extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      const { date, max, min, code, isToday } = this.props;

      return (
         <li className="day">
            <span>{getWeatherIcon(code)}</span>
            <p>{isToday ? 'Today' : formatDay(date)}</p>
            <p>
               {Math.floor(min)}&deg; &mdash; {Math.ceil(max)}&deg;
            </p>
         </li>
      );
   }
}
