import { useEffect, useCallback, useReducer } from 'react';
import { initialAppState, jsonServerCitiesLink } from '../../config';
import { getDataFromAPI } from '../../helper';
import type { City } from '../../types';
import { appReducer } from './appReducer';

export const useApp = () => {
   const [appState, appDispatch] = useReducer(appReducer, initialAppState);

   useEffect(() => {
      const controller = new AbortController();

      const fetchCities = async () => {
         appDispatch({ type: 'SET_IS_LOADING', payload: true });
         try {
            const data = await getDataFromAPI<City[]>(
               jsonServerCitiesLink,
               controller.signal,
            );
            appDispatch({ type: 'SET_CITIES_COUNTRIES', payload: data });
         } catch (err) {
            const error = err as Error;
            if (
               error.message === 'AbortError: signal is aborted without reason'
            )
               return;
            appDispatch({
               type: 'SET_ERROR',
               payload: `Error fetching cities: ${error.message}`,
            });
         }
      };

      fetchCities();

      return () => controller.abort();
   }, []);

   const getCity = useCallback(async (id: string) => {
      appDispatch({ type: 'SET_IS_LOADING', payload: true });
      try {
         const res = await fetch(`${jsonServerCitiesLink}/${id}`);

         if (!res.ok) throw new Error('Failed to fetch city');

         const data = await res.json();
         appDispatch({ type: 'SET_CURRENT_CITY', payload: data });
      } catch (err) {
         const error = err as Error;
         appDispatch({
            type: 'SET_ERROR',
            payload: `Error fetching current City: ${error.message}`,
         });
      }
   }, []);

   async function createCity(newCity: City) {
      try {
         appDispatch({ type: 'SET_IS_LOADING', payload: true });
         const res = await fetch(`${jsonServerCitiesLink}`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCity),
         });
         const data = await res.json();
         appDispatch({
            type: 'SET_CITIES_COUNTRIES',
            payload: [...appState.cities, data],
         });
         appDispatch({ type: 'SET_CURRENT_CITY', payload: data });
      } catch (err) {
         const error = err as Error;
         appDispatch({
            type: 'SET_ERROR',
            payload: `Error fetching current City: ${error.message}`,
         });
      }
   }

   const deleteCity = async (id: number | undefined) => {
      if (!id) return;
      try {
         appDispatch({ type: 'SET_IS_LOADING', payload: true });
         const res = await fetch(`${jsonServerCitiesLink}/${id}`, {
            method: 'DELETE',
         });
         if (!res.ok) throw new Error('Failed to delete city');
         const newCities = appState.cities.filter(
            (city: City) => city.id !== id,
         );
         appDispatch({ type: 'SET_CITIES_COUNTRIES', payload: newCities });
      } catch (err) {
         const error = err as Error;
         appDispatch({
            type: 'SET_ERROR',
            payload: `Error deleting City: ${error.message}`,
         });
      }
   };

   return {
      getCity,
      createCity,
      deleteCity,
      appState,
      appDispatch,
   };
};
