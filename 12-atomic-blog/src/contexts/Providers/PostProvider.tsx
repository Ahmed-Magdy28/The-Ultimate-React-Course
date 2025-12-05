import type { ReactNode } from 'react';
import { PostContext } from '../../contexts/Context';
import { useApp } from '../../logic/useApp';

export default function PostProvider({ children }: { children: ReactNode }) {
   const { searchedPosts, handleClearPosts, handleAddPost } = useApp();

   return (
      <PostContext.Provider
         value={{
            posts: searchedPosts,
            onClearPosts: handleClearPosts,
            onAddPost: handleAddPost,
         }}
      >
         {children}
      </PostContext.Provider>
   );
}
