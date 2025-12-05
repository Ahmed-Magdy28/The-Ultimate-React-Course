import type { appstate, authintialState, FormState } from './types';

export const BaseUrlLink: string = 'http://localhost:8000';
export const jsonServerCitiesLink: string = `${BaseUrlLink}/cities`;
export const TimeoutSeconds: number = 5;
export const NoCitiesYetMessage: string =
   'Add your first city by clicking on it in the map';
export const NoCountriesYetMessage: string =
   'Add your first country by clicking on it in the map';
export const ReverseUrlLink =
   'https://api.bigdatacloud.net/data/reverse-geocode-client';
export const initialAppState: appstate = {
   cities: [],
   countries: [],
   isLoading: false,
   error: null,
   currentCity: null,
};
export const initialFormState: FormState = {
   cityName: '',
   country: '',
   date: undefined,
   notes: '',
   lat: null,
   lng: null,
   emoji: '',
};

export const intialAuthState: authintialState = {
   user: { email: undefined, password: undefined },
   isAuthenticated: false,
};
export const FAKE_USER = {
   name: 'Jack',
   email: 'jack@example.com',
   password: 'qwerty',
   avatar: 'https://i.pravatar.cc/100?u=zz',
};
