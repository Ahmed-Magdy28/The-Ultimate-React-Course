import type { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';
import { formatDate } from '../../../helper';
import type { CityItemProps } from '../../../types';
import { useCitiesContex } from '../../../contexts/contexts';

export default function CityItem({ city }: CityItemProps) {
   const { cityName, emoji, date, id, position } = city;
   const { appState, deleteCity } = useCitiesContex();
   const { currentCity } = appState;
   if (!cityName) return;
   const currentCityId = currentCity?.id;
   const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      deleteCity(id);
   };
   return (
      <li>
         <Link
            className={`${styles.cityItem} ${currentCityId === id ? styles['cityItem--active'] : ''}`}
            to={`${id}?lat=${position.lat}&lng=${position.lng}`}
         >
            <span className={styles.emoji}>{emoji}</span>
            <h3 className={styles.name}>{cityName}</h3>
            <time className={styles.date}>({formatDate(date)})</time>
            <button className={styles.deleteBtn} onClick={handleClick}>
               &times;
            </button>
         </Link>
      </li>
   );
}
