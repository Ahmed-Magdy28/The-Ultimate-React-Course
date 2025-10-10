import { FromMilisecondtoSecond } from '../config';
import { useEffect } from 'react';

export const useTimer = ({ secondsRemaining, handleTimer }) => {
   useEffect(() => {
      const timerId = setInterval(() => {
         handleTimer();
      }, FromMilisecondtoSecond);

      return () => clearInterval(timerId);
   }, [handleTimer]);
   const minutes = Math.floor(secondsRemaining / 60);
   const seconds = secondsRemaining % 60;

   const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

   return formattedTime;
};
