import Sidebar from '../components/AppComponents/SideBar/Sidebar';
import styles from './AppLayout.module.css';
import Map from '../components/AppComponents/Map/Map';
export default function AppLayout() {
   return (
      <div className={styles.app}>
         <Sidebar />
         <Map />
      </div>
   );
}
