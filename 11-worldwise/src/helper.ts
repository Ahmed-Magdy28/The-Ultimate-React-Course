import { TimeoutSeconds } from './config';
import type { City, Country } from './types';

/**
 * Fetches data from a given API endpoint and handles errors properly.
 *
 * @template T - The expected data type (e.g., City[], City, etc.)
 * @param link - Full URL of the API endpoint.
 * @param signal - AbortSignal for request cancellation.
 * @returns A Promise that resolves to parsed JSON if successful.
 */
const fetchAPIData = async <T>(
   link: string,
   signal: AbortSignal,
): Promise<T> => {
   if (!link) throw new Error('No link provided');

   const res = await fetch(link, { signal });
   if (!res.ok) throw new Error('❌ Network error: Failed to fetch data');

   const data = (await res.json()) as T;

   return data;
};

/**
 * Adds a timeout wrapper to an API call.
 *
 * @template T - The expected data type.
 * @param link - API endpoint.
 * @param signal - AbortSignal for cancellation.
 * @returns Promise that either resolves with data or rejects on timeout.
 */
export const getDataFromAPI = async <T>(
   link: string,
   signal: AbortSignal,
): Promise<T> => {
   const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(
         () => reject(new Error('⏳ Request timed out')),
         TimeoutSeconds * 1000,
      ),
   );

   return Promise.race([fetchAPIData<T>(link, signal), timeoutPromise]);
};

/**
 * Handles API fetching and sets React state safely.
 *
 * @template T - The type of data expected (e.g., City[], City, etc.)
 * @param link - API endpoint.
 * @param signal - AbortSignal for cancellation.
 * @param setterFunction - React setState callback for success data.
 * @param setError - React setState callback for error messages.
 * @param isActive - Whether the component is still mounted.
 */
export const SetDataFromAPI = async <T>(
   link: string,
   signal: AbortSignal,
   setterFunction: (data: T) => void,
   setError: (error: string | null) => void,
   isActive = true,
): Promise<void> => {
   try {
      if (!link) {
         setError('No link provided');
         return;
      }
      const data = await getDataFromAPI<T>(link, signal);

      if (isActive) {
         setterFunction(data);
         setError(null);
      }
   } catch (error: unknown) {
      if (error instanceof DOMException && error.name === 'AbortError') return;

      if (error instanceof Error) setError(error.message);
   }
};

export const formatDate = (date: string | null) => {
   if (date === null) {
      return 'wrong date';
   }
   return new Intl.DateTimeFormat('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
   }).format(new Date(date));
};

export function convertToEmoji(countryCode: string) {
   const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt(0));
   return String.fromCodePoint(...codePoints);
}

export const formattedCountries: (data: City[]) => Country[] = (data) =>
   Array.from(
      new Map(
         data.map((city) => [
            city.country,
            { country: city.country, emoji: city.emoji },
         ]),
      ).values(),
   );
