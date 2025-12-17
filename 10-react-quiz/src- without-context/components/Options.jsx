function Options({ QuestionData, dispatch, userAnswer }) {
   const { options, correctOption } = QuestionData;
   const hasAnswered = userAnswer !== null;

   //
   const checkAnswer = (index) => {
      if (userAnswer == null) return '';
      const isSelected = userAnswer === index;
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
