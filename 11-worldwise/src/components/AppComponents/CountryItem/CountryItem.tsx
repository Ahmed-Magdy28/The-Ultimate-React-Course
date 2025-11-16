import styles from './CountryItem.module.css';
import type { CountryItemProps } from '../../../types';

function CountryItem({ country }: CountryItemProps) {
   return (
      <li className={styles.countryItem}>
         <span>{country.emoji}</span>
         <span>{country.country}</span>
      </li>
   );
}

export default CountryItem;
