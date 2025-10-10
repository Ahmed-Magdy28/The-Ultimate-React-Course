import { useTimer } from '../logic/useTimer';

function Timer({ handleTimer, secondsRemaining }) {
   const formattedTime = useTimer({ secondsRemaining, handleTimer });

   return <div className="timer">{formattedTime}</div>;
}

export default Timer;
