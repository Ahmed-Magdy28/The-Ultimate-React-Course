import type { City } from '../../../../types';
import OneMarker from './OneMarker';

export default function MarkerList({ cities }: { cities: City[] }) {
   return cities.map((city) => <OneMarker city={city} key={city.id} />);
}
