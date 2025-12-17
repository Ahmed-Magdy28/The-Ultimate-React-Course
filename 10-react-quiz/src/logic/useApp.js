import { useEffect } from 'react';
import { ApiUrl } from '../config';
import { getDataFromAPI } from '../helper';
import { useQuizContext } from '../context/quizContext';

export const useApp = () => {
   // {
   //    questions,
   //    error,
   //    isLoading,
   //    status,
   //    active,
   //    userPoints,
   //    userAnswer,
   //    totalPoints,
   //    highScore,
   //    secondsRemaining,
   // },
   const { state, dispatch } = useQuizContext();

   useEffect(() => {
      const controller = new AbortController();
      const addingData = async () => {
         dispatch({ type: 'setloading', payload: true });
         try {
            dispatch({
               type: 'dataRecived',
               data: await getDataFromAPI(ApiUrl, controller.signal),
            });
         } catch (err) {
            if (err.name === 'AbortError') {
               // console.log('');
               // console.log('Fetch aborted — cleanup safe ✅');
            } else {
               dispatch({ type: 'dataFailed', error: err });
               console.error('Fetch error:', err);
            }
         } finally {
            // dispatch({ type: 'setloading', payload: false });
         }
      };
      addingData();
      return () => controller.abort();
   }, []);

   useEffect(() => {
      const CalcTotalPoints = state.questions
         .map((question) => question.points)
         .reduce((acc, cur) => acc + cur, 0);
      dispatch({ type: 'calcTotalPoints', payload: CalcTotalPoints });
   }, [state.questions, dispatch]);

   const handleRestartQuiz = () => {
      dispatch({ type: 'resetQuiz' });
   };
   const handleTimer = () => {
      dispatch({ type: 'tick' });
   };

   return {
      handleRestartQuiz,
      handleTimer,
   };
};
