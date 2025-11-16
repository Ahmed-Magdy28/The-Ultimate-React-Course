import styles from './CityList.module.css';
import Spinner from '../spinner/Spinner';
import CityItem from '../CityItem/CityItem';
import type { CityListItemProps } from '../../../types';
import Message from '../Message/Message';
import { NoCitiesYetMessage } from '../../../config';

export default function CityList({ cities, isLoading }: CityListItemProps) {
   if (isLoading) return <Spinner />;
   if (!cities.length) return <Message message={NoCitiesYetMessage} />;

   return (
      <div className={styles.cityList}>
         {cities.map((city) => (
            <CityItem city={city} key={city.id} />
         ))}
      </div>
   );
}
