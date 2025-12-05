import { Marker, Popup } from 'react-leaflet';
import type { City } from '../../../../types';
export default function OneMarker({ city }: { city: City }) {
   return (
      <Marker key={city.id} position={city.position}>
         {city.notes ? (
            <Popup>{city.notes}</Popup>
         ) : (
            <Popup>
               <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
         )}
      </Marker>
   );
}
