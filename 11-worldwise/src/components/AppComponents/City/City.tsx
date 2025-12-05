import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './City.module.css';
import { formatDate } from '../../../helper';
import { useCitiesContex } from '../../../contexts/contexts';
import Spinner from '../spinner/Spinner';
import BackButton from '../Button/BackButton';

function City() {
   // TEMP DATA
   // const currentCity = {
   //    cityName: 'Lisbon',
   //    emoji: '🇵🇹',
   //    date: '2027-10-31T15:59:59.138Z',
   //    notes: 'My favorite city so far!',
   // };
   const { appState, getCity } = useCitiesContex();
   const { currentCity, isLoading } = appState;
   const { id } = useParams();
   useEffect(() => {
      if (id) getCity(id);
   }, [getCity, id]);
   if (isLoading) return <Spinner />;
   if (!currentCity) return;
   const { cityName, emoji, date, notes } = currentCity;
   // return <h1>City {id}</h1>;

   return (
      <div className={styles.city}>
         <div className={styles.row}>
            <h6>City name</h6>
            <h3>
               <span>{emoji}</span> {cityName}
            </h3>
         </div>

         <div className={styles.row}>
            <h6>You went to {cityName} on</h6>
            <p>{formatDate(date || null)}</p>
         </div>

         {notes && (
            <div className={styles.row}>
               <h6>Your notes</h6>
               <p>{notes}</p>
            </div>
         )}

         <div className={styles.row}>
            <h6>Learn more</h6>
            <a
               href={`https://en.wikipedia.org/wiki/${cityName}`}
               target="_blank"
               rel="noreferrer"
            >
               Check out {cityName} on Wikipedia &rarr;
            </a>
         </div>

         <div>
            <BackButton />
         </div>
      </div>
   );
}

export default City;
