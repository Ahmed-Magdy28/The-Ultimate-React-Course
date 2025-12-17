import type { ThunkAction, ThunkDispatch } from 'redux-thunk';

export interface initialstateAccount {
   balance: number;
   loan: number;
   loanPurpose: string;
   isLoading: boolean;
}

export type initialstateCustomer = {
   fullName: string;
   nationalID: string;
   createdAt: string;
};

export type AccountAction =
   | { type: 'account/deposit'; payload: number }
   | { type: 'account/withdraw'; payload: number }
   | {
        type: 'account/requestLoan';
        payload: {
           amount: number;
           loanPurpose: string;
        };
     }
   | { type: 'account/payLoan' }
   | { type: 'account/convertingCurrency' };

export type CustomerAction =
   | {
        type: 'customer/createCustomer';
        payload: { fullName: string; nationalID: string; createdAt: string };
     }
   | { type: 'customer/deleteCustomer' }
   | { type: 'customer/updateName'; payload: string };

export type Action = AccountAction | CustomerAction;
export interface RootState {
   account: initialstateAccount;
   customer: initialstateCustomer;
}
export type AppDispatch = ThunkDispatch<RootState, unknown, Action>;

export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action
>;
