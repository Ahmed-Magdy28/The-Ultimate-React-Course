import type { Dispatch, SetStateAction } from 'react';

export type Post = {
   title: string;
   body: string;
};
export type PostContextType = {
   posts: Post[];
   onClearPosts: () => void;
   onAddPost: (Post: Post) => void;
};
export type SearchContextType = {
   searchQuery: string;
   setSearchQuery: (query: string) => void;
};
export type UseAppReturnType = {
   Posts: Post[];
   searchedPosts: Post[];
   handleClearPosts: () => void;
   searchQuery: string;
   setSearchQuery: (query: string) => void;
   handleAddPost: (Post: Post) => void;
   isFakeDark: boolean;
   setIsFakeDark: Dispatch<SetStateAction<boolean>>;
};
export type singlePostType = {
   title: string;
   body: string;
   key: number;
};
