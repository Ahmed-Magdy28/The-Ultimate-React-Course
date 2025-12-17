function StartScreen({ NumberOfQuestions, dispatch }) {
   const handleStart = () => {
      dispatch({ type: 'startQuiz' });
   };

   return (
      <div className="start">
         <h2>Welcome to React Quiz!</h2>
         <h3>{NumberOfQuestions} questions to test your react mastery</h3>
         <button className="btn btn-ui" onClick={handleStart}>
            Lets start
         </button>
      </div>
   );
}

export default StartScreen;
