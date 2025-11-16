/**
 * Defines the structure of a single city object returned from your JSON server.
 */
export interface City {
   cityName: string;
   country: string;
   emoji: string;
   date: string;
   notes: string;
   position: {
      lat: number;
      lng: number;
   };
   id: number;
}

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

/**
 * Generic structure for any API response.
 */
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
