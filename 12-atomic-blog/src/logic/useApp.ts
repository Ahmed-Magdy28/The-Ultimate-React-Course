import { useState, useEffect, useCallback, useMemo } from 'react';
import { faker } from '@faker-js/faker';
import type { Post } from '../types';

export function createRandomPost(): Post {
   return {
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      body: faker.hacker.phrase(),
   };
}

export const useApp = () => {
   const [posts, setPosts] = useState<Post[]>(() =>
      Array.from({ length: 30 }, createRandomPost),
   );
   const [searchQuery, setSearchQuery] = useState('');
   const [isFakeDark, setIsFakeDark] = useState(false);

   // ✔️ Memoize derived state
   const searchedPosts = useMemo(() => {
      if (searchQuery.length === 0) return posts;

      const q = searchQuery.toLowerCase();
      return posts.filter((post) =>
         `${post.title} ${post.body}`.toLowerCase().includes(q),
      );
   }, [posts, searchQuery]);

   const handleAddPost = useCallback((post: Post) => {
      setPosts((p) => [post, ...p]);
   }, []);

   const handleClearPosts = useCallback(() => {
      setPosts([]);
   }, []);

   useEffect(() => {
      document.documentElement.classList.toggle('fake-dark-mode');
   }, [isFakeDark]);

   return {
      posts,
      searchedPosts,
      handleAddPost,
      handleClearPosts,
      searchQuery,
      setSearchQuery,
      isFakeDark,
      setIsFakeDark,
   };
};
