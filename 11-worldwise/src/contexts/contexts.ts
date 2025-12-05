import { createContext, useContext } from 'react';
import type { AuthContextType, CitiesContextType } from '../types';

export const CitiesContex = createContext<CitiesContextType | null>(null);

export const useCitiesContex = () => {
   const ctx = useContext(CitiesContex);
   if (!ctx) throw new Error('CitiesContex must be used inside its Provider');
   return ctx;
};

export const AuthContex = createContext<AuthContextType | null>(null);

export const useAuthContex = () => {
   const ctx = useContext(AuthContex);
   if (!ctx) throw new Error('AuthContex must be used inside its Provider');
   return ctx;
};
