import type { ReactNode } from 'react';
import styles from './Button.module.css';

export default function Button({
   children,
   onClick,
   type,
}: {
   children?: ReactNode;
   onClick?: React.MouseEventHandler<HTMLButtonElement>;
   type: string;
}) {
   return (
      <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
         {children}
      </button>
   );
}
