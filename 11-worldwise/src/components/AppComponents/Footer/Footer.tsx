import styles from './Footer.module.css';
export default function Footer() {
   return (
      <footer className={styles.footer}>
         <p className={styles.copyright}>
            Ahmed Magdy&copy; Copyright {new Date().getFullYear()}
         </p>
      </footer>
   );
}
