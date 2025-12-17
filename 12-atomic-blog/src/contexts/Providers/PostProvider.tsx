import { useMemo, type ReactNode } from 'react';
import { PostContext } from '../../contexts/Context';
import { useApp } from '../../logic/useApp';

export default function PostProvider({ children }: { children: ReactNode }) {
   const app = useApp();

   const value = useMemo(
      () => ({
         posts: app.searchedPosts,
         onAddPost: app.handleAddPost,
         onClearPosts: app.handleClearPosts,
         searchQuery: app.searchQuery,
         setSearchQuery: app.setSearchQuery,
      }),
      [
         app.searchedPosts,
         app.handleAddPost,
         app.handleClearPosts,
         app.searchQuery,
         app.setSearchQuery,
      ],
   );

   return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}
