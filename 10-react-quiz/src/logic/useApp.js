import { useReducer, useEffect } from 'react';
import { useReducerFunc } from './useReducerFunc';
import { ApiUrl, initialState } from '../config';
import { getDataFromAPI } from '../helper';

export const useApp = () => {
   const [
      {
         questions,
         error,
         isLoading,
         status,
         active,
         userPoints,
         userAnswer,
         totalPoints,
         highScore,
         secondsRemaining,
      },
      dispatch,
   ] = useReducer(useReducerFunc, initialState);

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
      const CalcTotalPoints = questions
         .map((question) => question.points)
         .reduce((acc, cur) => acc + cur, 0);
      dispatch({ type: 'calcTotalPoints', payload: CalcTotalPoints });
   }, [questions]);

   const handleRestartQuiz = () => {
      dispatch({ type: 'resetQuiz' });
   };
   const handleTimer = () => {
      dispatch({ type: 'tick' });
   };

   return {
      questions,
      error,
      isLoading,
      status,
      active,
      dispatch,
      userPoints,
      userAnswer,
      totalPoints,
      highScore,
      handleRestartQuiz,
      handleTimer,
      secondsRemaining,
   };
};
