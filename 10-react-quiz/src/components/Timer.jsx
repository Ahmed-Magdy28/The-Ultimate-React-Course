import { useQuizContext } from '../context/quizContext';
import { useTimer } from '../logic/useTimer';

function Timer() {
   const { state, handleTimer } = useQuizContext();
   const formattedTime = useTimer({
      secondsRemaining: state.secondsRemaining,
      handleTimer,
   });

   return <div className="timer">{formattedTime}</div>;
}

export default Timer;
