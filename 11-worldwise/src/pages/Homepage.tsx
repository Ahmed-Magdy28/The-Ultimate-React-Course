import { useNavigate } from 'react-router-dom';
import styles from './Homepage.module.css';
import PageNav from '../components/NavComponents/PageNav';
import { useAuthContex } from '../contexts/contexts';
import Button from '../components/AppComponents/Button/Button';

export default function Homepage() {
   const { isAuthenticated } = useAuthContex();
   const navigate = useNavigate();

   function handleClick() {
      if (isAuthenticated) navigate('/app');
      else navigate('/login');
   }

   return (
      <main className={styles.homepage}>
         <PageNav />
         <section>
            <h1>
               You travel the world.
               <br />
               WorldWise keeps track of your adventures.
            </h1>
            <h2>
               A world map that tracks your footsteps into every city you can
               think of. Never forget your wonderful experiences, and show your
               friends how you have wandered the world.
            </h2>

            <Button type={'cta'} onClick={handleClick}>
               Start tracking now
            </Button>
         </section>
      </main>
   );
}
