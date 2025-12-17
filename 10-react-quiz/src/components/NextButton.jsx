import { useQuizContext } from '../context/quizContext';

function NextButton() {
   const { state, dispatch } = useQuizContext();
   if (state.userAnswer == null) return null;

   const handleNextQuestion = () => {
      if (state.active + 1 === state.questions.length) {
         dispatch({ type: 'quizFinished' });
      } else dispatch({ type: 'nextQuestion' });
   };

   return (
      <button className="btn btn-ui" onClick={handleNextQuestion}>
         {state.active + 1 === state.questions.length ? 'Finish Quiz' : 'Next'}
      </button>
   );
}

export default NextButton;
