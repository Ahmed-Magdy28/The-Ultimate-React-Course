import { formattedCountries } from '../../helper';
import type { AppAction, appstate } from '../../types';

export function appReducer(appState: appstate, action: AppAction) {
   switch (action.type) {
      case 'SET_CITIES':
         return { ...appState, cities: action.payload, isLoading: false };
      case 'SET_COUNTRIES':
         return {
            ...appState,
            countries: formattedCountries(action.payload),
            isLoading: false,
         };
      case 'SET_IS_LOADING':
         return { ...appState, isLoading: action.payload };
      case 'SET_ERROR':
         return { ...appState, error: action.payload, isLoading: false };
      case 'SET_CURRENT_CITY':
         return { ...appState, currentCity: action.payload, isLoading: false };
      case 'SET_CITIES_COUNTRIES':
         return {
            ...appState,
            cities: action.payload,
            countries: formattedCountries(action.payload),
            isLoading: false,
         };
      case 'Delete_CITIY':
         return {
            ...appState,
            cities: action.payload,
            countries: formattedCountries(action.payload),
            currentCity: null,
            isLoading: false,
         };
      case 'RESET':
         return {
            ...appState,
            cities: [],
            countries: [],
            isLoading: false,
            error: null,
            currentCity: null,
         };
      default:
         return appState;
   }
}
