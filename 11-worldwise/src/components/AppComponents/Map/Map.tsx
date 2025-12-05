import { MapContainer, TileLayer } from 'react-leaflet';
import styles from './Map.module.css';
import { useWorldWiseMap } from '../../../logic/hooks/useWorldWiseMap';
import { useCitiesContex } from '../../../contexts/contexts';
import MarkerList from './LeafletHelper/MarkerList';
import { ChangeMapCenter } from './LeafletHelper/ChangeMapCenter';
import DetectMapClick from './LeafletHelper/DetectMapClick';
import Spinner from '../spinner/Spinner';
import Button from '../Button/Button';
export default function Map() {
   const {
      navigate,
      mapPosition,
      isLoadingPosition,
      getGeoLocationPosition,
      geoLocationPosition,
   } = useWorldWiseMap();

   const { appState } = useCitiesContex();
   const { cities } = appState;
   if (isLoadingPosition) return <Spinner />;

   return (
      <div className={styles.mapContainer}>
         {!geoLocationPosition && (
            <Button type="position" onClick={getGeoLocationPosition}>
               {isLoadingPosition ? 'Loading...' : 'use your Position'}
            </Button>
         )}
         <MapContainer
            center={mapPosition}
            zoom={13}
            scrollWheelZoom={true}
            className={styles.map}
         >
            <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
            <ChangeMapCenter moveTo={mapPosition || [0, 0]} zoom={13} />
            <MarkerList cities={cities} />
            <DetectMapClick navigate={navigate} />
         </MapContainer>
      </div>
   );
}
