import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import './App.css';
import Progress from './components/Progress';
import FinishScreen from './components/FinishScreen';
import { useQuizContext } from './context/quizContext';

function App() {
   const { state } = useQuizContext();
   const { appStatus, isLoading } = state;
   return (
      <>
         <div className="app">
            <Header />
            <Main>
               {appStatus === 'loading' && isLoading && <Loader />}
               {appStatus === 'error' && <Error />}
               {appStatus === 'ready' && <StartScreen />}
               {appStatus === 'active' && (
                  <>
                     <Progress />
                     <Question />
                  </>
               )}
               {appStatus === 'finished' && <FinishScreen />}
            </Main>
         </div>
      </>
   );
}

export default App;
