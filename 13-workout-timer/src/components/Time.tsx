import { useEffect, useState } from 'react';
import { formatTime } from '../helper';

export default function Time() {
   const [time, setTime] = useState(formatTime(new Date()));
   //    const partOfDay = time.slice(-2);
   useEffect(function () {
      const id = setInterval(function () {
         setTime(formatTime(new Date()));
      }, 1000);

      return () => clearInterval(id);
   }, []);

   return <time>For your workout on {time}</time>;
}
