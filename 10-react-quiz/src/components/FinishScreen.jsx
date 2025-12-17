import { useQuizContext } from '../context/quizContext';

function FinishScreen() {
   const { state, handleRestartQuiz } = useQuizContext();
   const percentage = (state.userPoints / state.totalPoints) * 100;
   let emoji;
   if (percentage === 100) emoji = '🥇';
   if (percentage >= 80 && percentage < 100) emoji = '🎉';
   if (percentage >= 50 && percentage < 80) emoji = '🙃';
   if (percentage >= 0 && percentage < 50) emoji = '🤨';
   if (percentage === 0) emoji = '🤦‍♂️';
   return (
      <>
         <p className="result">
            <span>{emoji}</span> You scored{' '}
            <strong>
               {state.userPoints} out of {state.totalPoints} (
               {Math.ceil(percentage)}%)
            </strong>
         </p>
         <p className="highscore">(Highest score : {state.highScore} points)</p>
         <button className="btn btn-ui" onClick={handleRestartQuiz}>
            Restart Quiz
         </button>
      </>
   );
}

export default FinishScreen;
