function NextButton({
   dispatch,
   userAnswer,
   activeQuestionIndex,
   totalQuestions,
}) {
   if (userAnswer == null) return null;

   const handleNextQuestion = () => {
      if (activeQuestionIndex === totalQuestions) {
         dispatch({ type: 'quizFinished' });
      } else dispatch({ type: 'nextQuestion' });
   };

   return (
      <button className="btn btn-ui" onClick={handleNextQuestion}>
         {activeQuestionIndex === totalQuestions ? 'Finish Quiz' : 'Next'}
      </button>
   );
}

export default NextButton;
