export const reducer = (state, action) => {
   switch (action.type) {
      case 'openAccount':
         return { ...state, isActive: true, balance: 500 };
      case 'addDeposit':
         return {
            ...state,
            balance: state.isActive ? state.balance + 150 : state.balance,
         };
      case 'payLoan':
         return {
            ...state,
            hasLoan: state.balance >= 5000 ? false : state.balance,
            balance:
               state.balance >= 5000 ? state.balance - 5000 : state.balance,
            loan: state.balance >= 5000 ? 0 : state.loan,
         };
      case 'Takeloan':
         return {
            ...state,
            balance: !state.hasLoan ? state.balance + 5000 : state.balance,
            loan: !state.hasLoan ? state.loan + 5000 : state.loan,
            hasLoan: state.hasLoan ? state.hasLoan : true,
         };
      case 'withdrawFromBalance':
         return {
            ...state,
            balance: state.isActive
               ? state.balance - 50 >= 0
                  ? state.balance - 50
                  : state.balance
               : state.balance,
         };
      case 'closeAccount':
         return {
            ...state,
            isActive:
               state.balance === 0 && state.loan === 0 ? false : state.isActive,
            balance:
               state.balance === 0 && state.loan === 0 ? 0 : state.balance,
         };

      default:
         throw new Error('Unknown Action');
   }
};
