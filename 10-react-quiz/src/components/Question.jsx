import Options from './Options';
import NextButton from './NextButton';
import Footer from './Footer';
import Timer from './Timer';

function Question({
   QuestionData,
   dispatch,
   userAnswer,
   totalQuestions,
   activeQuestionIndex,
   secondsRemaining,
   handleTimer,
}) {
   return (
      <>
         <div>
            <h4>{QuestionData.question}</h4>

            <Options
               QuestionData={QuestionData}
               dispatch={dispatch}
               userAnswer={userAnswer}
            />
            <Footer>
               <Timer
                  secondsRemaining={secondsRemaining}
                  handleTimer={handleTimer}
               />

               <NextButton
                  dispatch={dispatch}
                  userAnswer={userAnswer}
                  activeQuestionIndex={activeQuestionIndex}
                  totalQuestions={totalQuestions}
               />
            </Footer>
         </div>
      </>
   );
}

export default Question;
