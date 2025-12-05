import { type ReactNode } from 'react';
import { CitiesContex } from './contexts';
import { useApp } from '../logic/hooks/useApp';

export default function CitiesProvider({ children }: { children: ReactNode }) {
   const { getCity, createCity, deleteCity, appState, appDispatch } = useApp();

   return (
      <CitiesContex.Provider
         value={{
            appDispatch,
            appState,
            getCity,
            createCity,
            deleteCity,
         }}
      >
         {children}
      </CitiesContex.Provider>
   );
}
