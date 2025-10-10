import { useReducer } from 'react';
import { initialState } from '../config';
import { reducer } from './reducer';

export const useApp = () => {
   const [{ balance, loan, isActive }, dispatchAction] = useReducer(
      reducer,
      initialState
   );

   const handleOpenAccount = () => {
      dispatchAction({ type: 'openAccount' });
   };
   const handleAddDeposit = () => {
      dispatchAction({ type: 'addDeposit' });
   };
   const handleWithdrowFromDeposit = () => {
      dispatchAction({ type: 'withdrawFromBalance' });
   };
   const handleTakeLoan = () => {
      dispatchAction({ type: 'Takeloan' });
   };
   const handlePayLoan = () => {
      dispatchAction({ type: 'payLoan' });
   };
   const handleCloseAccount = () => {
      dispatchAction({ type: 'closeAccount' });
   };

   return {
      balance,
      loan,
      isActive,
      dispatchAction,
      handleOpenAccount,
      handleAddDeposit,
      handleWithdrowFromDeposit,
      handleTakeLoan,
      handlePayLoan,
      handleCloseAccount,
   };
};
