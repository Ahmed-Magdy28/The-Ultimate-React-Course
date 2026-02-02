import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { loginAPI } from '../../../services/apiUsers';

export default function useLogin() {
   const navigate = useNavigate();

   const {
      isPending: isLoggingIn,
      mutate: login,
      error: errorLogin,
   } = useMutation({
      mutationFn: ({ email, password }: { email: string; password: string }) =>
         loginAPI({ email, password }),
      onSuccess: () => {
         toast.success('Signed in successfully');
         navigate('/dashboard');
      },
      onError: () => {
         toast.error('Provided email or password are incorrect');
      },
   });

   return { isLoggingIn, login, errorLogin };
}
