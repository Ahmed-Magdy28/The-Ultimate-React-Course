import type { LatLngTuple } from 'leaflet';
import type { ActionDispatch } from 'react';
import type { NavigateFunction } from 'react-router-dom';

/**
 * Defines the structure of a single city object returned from your JSON server.
 */
export type City = {
   cityName: string;
   country: string;
   emoji: string;
   date: string;
   notes: string;
   position: {
      lat: number;
      lng: number;
   };
   id?: number;
};

export interface Country {
   country: string;
   emoji: string;
}

export type CountryListItemProps = {
   countries: Country[];
   isLoading: boolean;
};

export type CountryItemProps = {
   country: Country;
};

export interface APIResponse {
   Response?: string;
   Error?: string;
   status?: number;
   Search?: unknown[];
   [key: string]: unknown;
}

export type CityListItemProps = {
   cities: City[];
   isLoading: boolean;
};

export type CityItemProps = {
   city: City;
};

export type CitiesContextType = {
   getCity: (id: string) => Promise<void>;
   createCity: (newCity: City) => Promise<void>;
   deleteCity: (id: number | undefined) => Promise<void>;
   appState: appstate;
   appDispatch: dispatch;
};

export type useMapReturnType = {
   navigate: NavigateFunction;
   mapPosition: LatLngTuple;
   geoLocationError: string | null;
   isLoadingPosition: boolean;
   geoLocationPosition: LatLngTuple | null;
   getGeoLocationPosition: () => void;
};
export type useworldWiseMap = () => useMapReturnType;

export type appstate = {
   cities: City[];
   countries: Country[];
   isLoading: boolean;
   error: string | null;
   currentCity: City | null;
};

export type dispatch = ActionDispatch<[action: AppAction]>;

export type AppAction =
   | { type: 'SET_CITIES'; payload: City[] }
   | { type: 'SET_COUNTRIES'; payload: City[] }
   | { type: 'SET_IS_LOADING'; payload: boolean }
   | { type: 'SET_ERROR'; payload: string | null }
   | { type: 'SET_CURRENT_CITY'; payload: City | null }
   | { type: 'SET_CITIES_COUNTRIES'; payload: City[] }
   | { type: 'Delete_CITIY'; payload: City[] }
   | { type: 'RESET'; payload: null };

export interface FormState {
   cityName: string;
   country: string;
   date: Date | undefined;
   notes: string;
   lat: number | null;
   lng: number | null;
   emoji: string;
}

export type FormAction =
   | { type: 'SET_CITY_NAME'; payload: string }
   | { type: 'SET_COUNTRY'; payload: string }
   | { type: 'SET_DATE'; payload: Date }
   | { type: 'SET_NOTES'; payload: string }
   | { type: 'SET_LAT'; payload: number | null }
   | { type: 'SET_LNG'; payload: number | null }
   | { type: 'SET_EMOJI'; payload: string }
   | { type: 'RESET_FORM'; payload?: null };

export type authState = null;
export type authAction =
   | {
        type: 'login';
        payload: { email: string | undefined; password: string | undefined };
     }
   | { type: 'logout'; payload?: undefined };
export type authintialState = {
   user: {
      email: string | undefined;
      password: string | undefined;
      avatar?: string | undefined;
      name?: string | undefined;
   } | null;
   isAuthenticated: boolean;
};

export type AuthContextType = {
   user: authintialState['user'];
   isAuthenticated: boolean;
   login: (email: string, password: string) => void;
   logout: () => void;
   // dispatch: React.Dispatch<authAction>;
};
