import { useReducer } from 'react';
import { useReducerFunc } from '../logic/useReducerFunc';
import { initialState } from '../config';
import { QuizContext } from './quizContext';
import { useApp } from '../logic/useApp';

export default function QuizProvider({ children }) {
   const [state, dispatch] = useReducer(useReducerFunc, initialState);
   const { handleRestartQuiz, handleTimer } = useApp();
   return (
      <QuizContext.Provider
         value={{ state, dispatch, handleRestartQuiz, handleTimer }}
      >
         {children}
      </QuizContext.Provider>
   );
}
