import { useQuizContext } from '../context/quizContext';

function Options() {
   const { state, dispatch } = useQuizContext();
   const { options, correctOption } = state.questions.at(state.active);
   const hasAnswered = state.userAnswer !== null;

   //
   const checkAnswer = (index) => {
      if (state.userAnswer == null) return '';
      const isSelected = state.userAnswer === index;
      const correctAnswer = index === correctOption;
      if (isSelected && correctAnswer) return 'answer correct';
      if (isSelected && !correctAnswer) return 'answer wrong';
      if (!isSelected && !correctAnswer) return 'wrong';
      if (!isSelected && correctAnswer) return 'correct';

      return '';
   };

   return (
      <div className="options">
         {options.map((option, index) => (
            <button
               className={`btn btn-option  ${checkAnswer(index)}`}
               key={option}
               disabled={hasAnswered}
               onClick={() =>
                  dispatch({
                     type: 'newAnswer',
                     payload: index,
                  })
               }
            >
               {option}
            </button>
         ))}
      </div>
   );
}

export default Options;
