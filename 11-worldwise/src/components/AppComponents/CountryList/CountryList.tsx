import styles from './CountryList.module.css';
import Spinner from '../spinner/Spinner';
import Message from '../Message/Message';
import { NoCountriesYetMessage } from '../../../config';
import CountryItem from '../CountryItem/CountryItem';
import { useCitiesContex } from '../../../contexts/contexts';
import type { Country } from '../../../types';

export default function CountryList() {
   const { appState } = useCitiesContex();
   const { countries, isLoading } = appState;

   if (isLoading) return <Spinner />;
   if (!countries.length) return <Message message={NoCountriesYetMessage} />;

   return (
      <div className={styles.countryList}>
         {countries.map((country: Country) => (
            <CountryItem country={country} key={country.country} />
         ))}
      </div>
   );
}
