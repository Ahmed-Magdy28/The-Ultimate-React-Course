import { configureStore } from '@reduxjs/toolkit';
import {
   useSelector,
   useDispatch,
   type TypedUseSelectorHook,
} from 'react-redux';
import accountSlice from './features/accounts/accountSlice';
import customerSlice from './features/customers/customerSlice';
import type { AppDispatch, RootState } from './types';

const store = configureStore({
   reducer: {
      account: accountSlice,
      customer: customerSlice,
   },
});

export default store;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
