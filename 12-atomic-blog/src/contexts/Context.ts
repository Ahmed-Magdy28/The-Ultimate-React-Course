import { createContext, useContext } from 'react';
import type { PostContextType, SearchContextType } from '../types';

// 1) creating context

export const PostContext = createContext<PostContextType | null>(null);
export const SearchContext = createContext<SearchContextType | null>(null);

// 2) creating custom hooks for using context
export const usePostContext = () => {
   const ctx = useContext(PostContext);
   if (!ctx) throw new Error('PostContext must be used inside its Provider');
   return ctx;
};

export const useSearchContext = () => {
   const ctx = useContext(SearchContext);
   if (!ctx) throw new Error('SearchContext must be used inside its Provider');
   return ctx;
};
