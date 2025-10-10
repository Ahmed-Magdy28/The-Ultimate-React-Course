function Progress({
   activeQuestionIndex,
   totalQuestions,
   userPoints,
   totalPoints,
   userAnswer,
}) {
   return (
      <header className="progress">
         <progress
            max={totalQuestions}
            value={activeQuestionIndex - 1 + Number(userAnswer !== null)}
         ></progress>
         <p>
            Question <strong>{activeQuestionIndex}</strong> / {totalQuestions}
         </p>
         <p>
            {userPoints} / {totalPoints}
         </p>
      </header>
   );
}

export default Progress;
