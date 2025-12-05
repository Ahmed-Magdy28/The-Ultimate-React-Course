import type { LatLngTuple } from 'leaflet';
import { useMap } from 'react-leaflet';

export function ChangeMapCenter({
   moveTo,
   zoom = undefined,
}: {
   moveTo: LatLngTuple;
   zoom: number | undefined;
}) {
   const map = useMap();
   if (zoom && moveTo) {
      map.flyTo(moveTo, zoom);
   } else map.flyTo(moveTo);

   return null;
}
