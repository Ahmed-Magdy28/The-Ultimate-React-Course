import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { initialStateAccount } from '../../config';
import type { AccountAction, AppThunk } from '../../types';

const accountSlice = createSlice({
   name: 'account',
   initialState: initialStateAccount,
   reducers: {
      deposit: (state, action: PayloadAction<number>) => {
         state.balance += action.payload;
         state.isLoading = false;
      },
      withdraw(state, action: { payload: number }) {
         state.balance -= action.payload;
      },
      requestLoan: {
         prepare(amount: number, loanPurpose: string) {
            return {
               payload: {
                  amount,
                  loanPurpose,
               },
            };
         },

         reducer(
            state,
            action: { payload: { amount: number; loanPurpose: string } },
         ) {
            if (state.loan > 0) return;
            state.loan = action.payload.amount;
            state.balance += action.payload.amount;
            state.loanPurpose = action.payload.loanPurpose;
         },
      },
      payLoan(state) {
         if (state.balance < state.loan) return;
         state.balance -= state.loan;
         state.loan = 0;
         state.loanPurpose = '';
      },
      convertingCurrency(state) {
         state.isLoading = true;
      },
   },
});

export const { withdraw, convertingCurrency, payLoan, requestLoan } =
   accountSlice.actions;

export function deposit(
   amount: number,
   currency: string = 'USD',
): AccountAction | AppThunk {
   if (currency === 'USD') {
      return {
         type: 'account/deposit',
         payload: amount,
      };
   }

   return async (dispatch) => {
      dispatch({ type: 'account/convertingCurrency' });
      const res = await fetch(
         `https://api.frankfurter.dev/v1/latest?base=${currency}&symbols=USD`,
      );
      const data = await res.json();
      const rate = data.rates.USD;
      const convertedAmount = Number((amount * rate).toFixed(2));
      dispatch({
         type: 'account/deposit',
         payload: convertedAmount,
      });
   };
}

export default accountSlice.reducer;

// Redux Old Setup
// import type { AccountAction, AppThunk, initialstateAccount } from '../../types';
// export default function accountReducer(
//    state: initialstateAccount = initialStateAccount,
//    action: AccountAction,
// ): initialstateAccount {
//    switch (action.type) {
//       case 'account/deposit':
//          return {
//             ...state,
//             balance: state.balance + action.payload,
//             isLoading: false,
//          };
//       case 'account/withdraw':
//          return { ...state, balance: state.balance - action.payload };
//       case 'account/requestLoan':
//          if (state.loan > 0) return state;
//          return {
//             ...state,
//             loan: action.payload.amount,
//             balance: state.balance + action.payload.amount,
//             loanPurpose: action.payload.loanPurpose,
//          };
//       case 'account/payLoan':
//          return {
//             ...state,
//             balance: state.balance - state.loan,
//             loan: 0,
//             loanPurpose: '',
//          };

//       case 'account/convertingCurrency':
//          return {
//             ...state,
//             isLoading: true,
//          };
//       default:
//          return state;
//    }
// }
// export function deposit(
//    amount: number,
//    currency: string = 'USD',
// ): AccountAction | AppThunk {
//    if (currency === 'USD') {
//       return {
//          type: 'account/deposit',
//          payload: amount,
//       };
//    }

//    return async (dispatch) => {
//       dispatch({ type: 'account/convertingCurrency' });
//       const res = await fetch(
//          `https://api.frankfurter.dev/v1/latest?base=${currency}&symbols=USD`,
//       );
//       const data = await res.json();
//       const rate = data.rates.USD;
//       const convertedAmount = Number((amount * rate).toFixed(2));
//       dispatch({
//          type: 'account/deposit',
//          payload: convertedAmount,
//       });
//    };
// }
// export function withdraw(amount: number) {
//    return {
//       type: 'account/withdraw',
//       payload: amount,
//    } as AccountAction;
// }
// export function requestLoan(amount: number, loanPurpose: string) {
//    return {
//       type: 'account/requestLoan',
//       payload: {
//          amount,
//          loanPurpose,
//       },
//    } as AccountAction;
// }
// export function payLoan() {
//    return {
//       type: 'account/payLoan',
//    } as AccountAction;
// }
