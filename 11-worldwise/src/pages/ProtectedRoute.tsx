import { useEffect, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContex } from '../contexts/contexts';
export default function ProtectedRoute({ children }: { children: ReactNode }) {
   const { isAuthenticated } = useAuthContex();
   const navigate = useNavigate();

   useEffect(
      function () {
         if (!isAuthenticated) navigate('/');
      },
      [isAuthenticated, navigate],
   );

   return <>{isAuthenticated ? children : null}</>;
}
