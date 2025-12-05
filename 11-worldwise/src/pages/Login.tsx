import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import PageNav from '../components/NavComponents/PageNav';
import { useAuthContex } from '../contexts/contexts';
import Button from '../components/AppComponents/Button/Button';
import ErrorPage from './ErrorPage';

export default function Login() {
   // PRE-FILL FOR DEV PURPOSES
   const { login, isAuthenticated } = useAuthContex();
   const navigate = useNavigate();
   // const [email, setEmail] = useState('jack@example.com');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState<null | Error>();

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!email || !password) return;
      try {
         login(email, password);
      } catch (error) {
         const err = error as Error;
         setError(err);
      }
   };

   useEffect(() => {
      if (isAuthenticated) {
         navigate('/app', { replace: true });
      }
   }, [navigate, isAuthenticated]);

   if (error) return <ErrorPage message={String(error)} />;
   return (
      <main className={styles.login}>
         <PageNav />
         <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
               <label htmlFor="email">Email address</label>
               <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
               />
            </div>

            <div className={styles.row}>
               <label htmlFor="password">Password</label>
               <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
               />
            </div>

            <div>
               <Button type="primary">{'Login'}</Button>
            </div>
         </form>
      </main>
   );
}
