import styles from './CityList.module.css';
import Spinner from '../spinner/Spinner';
import CityItem from '../CityItem/CityItem';
import Message from '../Message/Message';
import { NoCitiesYetMessage } from '../../../config';
import { useCitiesContex } from '../../../contexts/contexts';

export default function CityList() {
   const { appState } = useCitiesContex();
   const { cities, isLoading } = appState;
   if (isLoading) return <Spinner />;
   if (!cities.length) return <Message message={NoCitiesYetMessage} />;
   return (
      <div className={styles.cityList}>
         {cities.map((city) => {
            if (!city.cityName && city.id) return;
            if (city.cityName && city.id)
               return <CityItem city={city} key={city.id} />;
         })}
      </div>
   );
}
