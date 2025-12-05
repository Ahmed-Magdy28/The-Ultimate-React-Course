import type { LatLngTuple } from 'leaflet';
import { useState } from 'react';

export function useGeolocation(
   defaultPosition = null as LatLngTuple | null,
   setter?: (pos: LatLngTuple) => void,
) {
   const [isLoading, setIsLoading] = useState(false);
   const [position, setPosition] = useState<LatLngTuple | null>(
      defaultPosition,
   );
   const [error, setError] = useState<null | string>(null);

   function getPosition() {
      if (!navigator.geolocation)
         return setError('Your browser does not support geolocation');

      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
         (pos) => {
            setPosition([pos.coords.latitude, pos.coords.longitude]);
            setIsLoading(false);
            if (setter) setter([pos.coords.latitude, pos.coords.longitude]);
         },
         (error) => {
            setError(error.message);
            setIsLoading(false);
         },
      );
   }

   return { isLoading, position, error, getPosition };
}
