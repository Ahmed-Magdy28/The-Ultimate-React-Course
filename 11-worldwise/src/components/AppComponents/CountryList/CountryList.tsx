import styles from './CountryList.module.css';
import Spinner from '../spinner/Spinner';
import type { CountryListItemProps } from '../../../types';
import Message from '../Message/Message';
import { NoCountriesYetMessage } from '../../../config';
import CountryItem from '../CountryItem/CountryItem';

export default function CountryList({
   countries,
   isLoading,
}: CountryListItemProps) {
   if (isLoading) return <Spinner />;
   if (!countries.length) return <Message message={NoCountriesYetMessage} />;

   return (
      <div className={styles.countryList}>
         {countries.map((country) => (
            <CountryItem country={country} key={country.country} />
         ))}
      </div>
   );
}
