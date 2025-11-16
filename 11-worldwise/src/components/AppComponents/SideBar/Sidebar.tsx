import { Outlet } from 'react-router-dom';
import styles from './Sidebar.module.css';
import Logo from '../../PageComponents/Logo';
import AppNav from '../../NavComponents/AppNav.tsx';
import Footer from '../Footer/Footer';

export default function Sidebar() {
   return (
      <div className={styles.sidebar}>
         <Logo />
         <AppNav />
         <Outlet />
         <Footer />
      </div>
   );
}
