import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUrlPosition } from './useUrlPostion';
import { convertToEmoji } from '../../helper';
import type { City } from '../../types';
import { ReverseUrlLink } from '../../config';

export const useForm = (createCity?: (newCity: City) => Promise<void>) => {
   const [cityName, setCityName] = useState('');
   const [country, setCountry] = useState('');
   const [date, setDate] = useState<Date | undefined>(new Date());
   const [notes, setNotes] = useState('');
   const [lat, lng] = useUrlPosition();
   const [emoji, setEmoji] = useState('');
   const [geoCodingerror, setGeoCodingError] = useState<string | null>(null);
   const [isLoadingCityData, setIsLoadingCityData] = useState(false);
   const [newCity, setNewCity] = useState<City | null>(null);

   const navigate = useNavigate();

   useEffect(() => {
      // if (!lat || !lng) return;

      const fetchCityData = async () => {
         if (lat && lng) {
            try {
               setIsLoadingCityData(true);
               const response = await fetch(
                  `${ReverseUrlLink}?latitude=${lat}&longitude=${lng}`,
               );
               const data = await response.json();
               console.log(data);
               if (!data.countryCode)
                  throw new Error('Clicked location is ocean or unknown');

               if (data.city) {
                  setCityName(data.city || data.locality || '');
                  setCountry(data.countryName);
                  setEmoji(convertToEmoji(data.countryCode));
                  setGeoCodingError(null);
               }
            } catch (err) {
               const error =
                  err instanceof Error ? err : new Error(String(err));
               setGeoCodingError(error.message);
            } finally {
               setIsLoadingCityData(false);
            }
         }
      };
      fetchCityData();
   }, [lat, lng]);

   const clearForm = () => {
      setCityName('');
      setCountry('');
      setEmoji('');
      setDate(undefined);
      setNotes('');
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!date || !cityName) return;
      const newCity: City = {
         cityName,
         country,
         emoji,
         date: date.toISOString().split('T')[0],
         notes,
         position: {
            lat,
            lng,
         },
      };
      setNewCity(newCity);
      if (createCity) await createCity(newCity);
      clearForm();
      navigate('/app/cities');
   };
   const handleDateChange = (date: Date | undefined) => {
      if (date) {
         setDate(date);
      }
   };

   return {
      cityName,
      notes,
      setNotes,
      lat,
      lng,
      country,
      isLoadingCityData,
      setCityName,
      emoji,
      geoCodingerror,
      handleSubmit,
      date,
      handleDateChange,
      newCity,
   };
};
