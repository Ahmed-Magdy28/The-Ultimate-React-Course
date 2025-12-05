import type { LeafletMouseEvent } from 'leaflet';
import { useMapEvents } from 'react-leaflet';
import type { NavigateFunction } from 'react-router-dom';

export default function DetectMapClick({
   navigate,
}: {
   navigate: NavigateFunction;
}) {
   useMapEvents({
      click: (e: LeafletMouseEvent) =>
         navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
   });

   return <div></div>;
}
