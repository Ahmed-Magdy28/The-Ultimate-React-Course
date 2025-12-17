import Options from './Options';
import NextButton from './NextButton';
import Footer from './Footer';
import Timer from './Timer';
import { useQuizContext } from '../context/quizContext';

function Question() {
   const { state } = useQuizContext();

   return (
      <>
         <div>
            <h4>{state.questions.at(state.active).question}</h4>

            <Options />
            <Footer>
               <Timer />

               <NextButton />
            </Footer>
         </div>
      </>
   );
}

export default Question;
