import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import './App.css';
import { useApp } from './logic/useApp';
import Progress from './components/Progress';
import FinishScreen from './components/FinishScreen';

function App() {
   const {
      status,
      isLoading,
      active,
      dispatch,
      questions,
      userAnswer,
      userPoints,
      totalPoints,
      highScore,
      handleRestartQuiz,
      handleTimer,
      secondsRemaining,
   } = useApp();
   return (
      <>
         <div className="app">
            <Header />
            <Main>
               {status === 'loading' && isLoading && <Loader />}
               {status === 'error' && <Error />}
               {status === 'ready' && (
                  <StartScreen
                     NumberOfQuestions={questions.length}
                     dispatch={dispatch}
                  />
               )}
               {status === 'active' && (
                  <>
                     <Progress
                        activeQuestionIndex={active + 1}
                        totalQuestions={questions.length}
                        userPoints={userPoints}
                        totalPoints={totalPoints}
                        userAnswer={userAnswer}
                     />
                     <Question
                        dispatch={dispatch}
                        QuestionData={questions.at(active)}
                        active={active}
                        userAnswer={userAnswer}
                        activeQuestionIndex={active + 1}
                        totalQuestions={questions.length}
                        handleTimer={handleTimer}
                        secondsRemaining={secondsRemaining}
                     />
                  </>
               )}
               {status === 'finished' && (
                  <FinishScreen
                     userPoints={userPoints}
                     totalPoints={totalPoints}
                     highScore={highScore}
                     handleRestartQuiz={handleRestartQuiz}
                  />
               )}
            </Main>
         </div>
      </>
   );
}

export default App;
