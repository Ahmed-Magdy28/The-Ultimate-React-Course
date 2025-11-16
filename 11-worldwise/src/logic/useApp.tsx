import { useState, useEffect } from 'react';
import { jsonServerCitiesLink } from '../config';
import { getDataFromAPI } from '../helper';
import type { City, Country } from '../types';

export const useApp = () => {
   const [cities, setCities] = useState<City[]>([]);
   const [countries, setCountries] = useState<Country[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);
   useEffect(() => {
      const controller = new AbortController();

      const fetchCities = async () => {
         setIsLoading(true);
         try {
            const data = await getDataFromAPI<City[]>(
               jsonServerCitiesLink,
               controller.signal,
            );
            setCities(data);
            const formattedCountries: Country[] = Array.from(
               new Map(
                  data.map((city) => [
                     city.country, // use country as unique key
                     { country: city.country, emoji: city.emoji },
                  ]),
               ).values(),
            );

            setCountries(formattedCountries);
         } catch (err) {
            const error = err as Error;
            if (
               error.message === 'AbortError: signal is aborted without reason'
            )
               return;
            setError(`Error fetching cities: ${error.message}`);
         } finally {
            setIsLoading(false);
         }
      };

      fetchCities();

      return () => controller.abort();
   }, []);

   return { error, cities, setCities, isLoading, setIsLoading, countries };
};
