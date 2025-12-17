import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
   useSelector,
   useDispatch,
   type TypedUseSelectorHook,
} from 'react-redux';
import { thunk } from 'redux-thunk';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';
import type { AppDispatch, RootState } from './types';

const rootReducer = combineReducers({
   account: accountReducer,
   customer: customerReducer,
});
// @ts-expect-error - Suppressing deprecation warning for legacy Redux setup
const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk)),
);

export default store;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
