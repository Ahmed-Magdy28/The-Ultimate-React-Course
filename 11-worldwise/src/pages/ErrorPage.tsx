import styles from './ErrorPage.module.css';

export default function ErrorPage({ message }: { message: string }) {
   return (
      <div className={styles.wrapper}>
         <h1 className={styles.icon}>⚠️</h1>
         <h2 className={styles.title}>Something went wrong</h2>
         <p className={styles.message}>{message}</p>
      </div>
   );
}
