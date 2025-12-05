import type { LatLngTuple } from 'leaflet';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { useworldWiseMap } from '../../types';
import { useGeolocation } from './useGeoLocation';
import { useUrlPosition } from './useUrlPostion.ts';

export const useWorldWiseMap: useworldWiseMap = () => {
   const navigate = useNavigate();
   const [mapPosition, setMapPosition] = useState<LatLngTuple>([
      30.093504, 31.266576,
   ]);
   const {
      isLoading: isLoadingPosition,
      position: geoLocationPosition,
      error: geoLocationError,
      getPosition: getGeoLocationPosition,
   } = useGeolocation(null, setMapPosition);
   const [lat, lng] = useUrlPosition();

   useEffect(() => {
      if (geoLocationPosition) {
         // eslint-disable-next-line react-hooks/set-state-in-effect
         setMapPosition(geoLocationPosition);
      }
   }, [geoLocationPosition]);

   useEffect(() => {
      const changeMapPostion = async () => {
         if (lat && lng) setMapPosition([lat, lng]);
      };
      changeMapPostion();
   }, [lat, lng]);

   return {
      navigate,
      mapPosition,
      isLoadingPosition,
      geoLocationPosition,
      geoLocationError,
      getGeoLocationPosition,
   };
};
