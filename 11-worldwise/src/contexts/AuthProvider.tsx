import { useReducer, type ReactNode } from 'react';
import { AuthContex } from './contexts';
import type { authAction, authintialState } from '../types';
import { FAKE_USER, intialAuthState } from '../config';

export const AuthReducer = (authState: authintialState, action: authAction) => {
   switch (action.type) {
      case 'login':
         return { ...authState, user: action.payload, isAuthenticated: true };
      case 'logout':
         return { ...authState, user: null, isAuthenticated: false };

      default:
         return authState;
   }
};

export default function AuthProvider({ children }: { children: ReactNode }) {
   const [{ user, isAuthenticated }, dispatch] = useReducer(
      AuthReducer,
      intialAuthState,
   );

   const login = (email: string, password: string) => {
      if (email === FAKE_USER.email && password === FAKE_USER.password)
         dispatch({ type: 'login', payload: FAKE_USER });
      else throw Error('wrong email or password');
   };

   const logout = () => {
      dispatch({ type: 'logout' });
   };

   return (
      <AuthContex.Provider
         value={{
            user,
            isAuthenticated,
            login,
            logout,
         }}
      >
         {children}
      </AuthContex.Provider>
   );
}
