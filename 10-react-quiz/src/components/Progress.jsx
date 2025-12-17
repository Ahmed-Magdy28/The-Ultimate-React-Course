import { useQuizContext } from '../context/quizContext';

function Progress() {
   const { state } = useQuizContext();
   const {
      active: activeQuestionIndex,
      questions,
      userPoints,
      totalPoints,
      userAnswer,
   } = state;
   return (
      <header className="progress">
         <progress
            max={questions.length}
            value={activeQuestionIndex + Number(userAnswer !== null)}
         ></progress>
         <p>
            Question <strong>{activeQuestionIndex}</strong> / {questions.length}
         </p>
         <p>
            {userPoints} / {totalPoints}
         </p>
      </header>
   );
}

export default Progress;
