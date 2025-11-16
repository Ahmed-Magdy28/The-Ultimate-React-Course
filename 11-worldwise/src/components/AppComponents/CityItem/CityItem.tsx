import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';
import { formatDate } from '../../../helper';
import type { CityItemProps } from '../../../types';

export default function CityItem({ city }: CityItemProps) {
   const { cityName, emoji, date, id, position } = city;

   return (
      <li>
         <Link
            className={styles.cityItem}
            // to={`${id}`}
            to={`${id}?lat=${position.lat}&lng=${position.lng}`}
         >
            <span className={styles.emoji}>{emoji}</span>
            <h3 className={styles.name}>{cityName}</h3>
            <time className={styles.date}>({formatDate(date)})</time>
            <button className={styles.deleteBtn}>&times;</button>
         </Link>
      </li>
   );
}
