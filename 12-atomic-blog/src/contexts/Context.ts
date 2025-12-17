import { createContext, useContext } from 'react';
import type { PostContextType } from '../types';

// 1) creating context

export const PostContext = createContext<PostContextType | null>(null);

// 2) creating custom hooks for using context
export const usePostContext = () => {
   const ctx = useContext(PostContext);
   if (!ctx) throw new Error('PostContext must be used inside its Provider');
   return ctx;
};
