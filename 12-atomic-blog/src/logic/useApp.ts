import { useState, useEffect } from 'react';
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
      Array.from({ length: 30 }, () => createRandomPost()),
   );
   const [searchQuery, setSearchQuery] = useState<string>('');
   const [isFakeDark, setIsFakeDark] = useState<boolean>(false);

   // Derived state. These are the posts that will actually be displayed
   const searchedPosts =
      searchQuery.length > 0
         ? posts.filter((post) =>
              `${post.title} ${post.body}`
                 .toLowerCase()
                 .includes(searchQuery.toLowerCase()),
           )
         : posts;

   function handleAddPost(post: Post) {
      setPosts((posts) => [post, ...posts]);
   }

   function handleClearPosts() {
      setPosts([]);
   }

   // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
   useEffect(
      function () {
         document.documentElement.classList.toggle('fake-dark-mode');
      },
      [isFakeDark],
   );

   return {
      posts,
      searchedPosts,
      handleClearPosts,
      searchQuery,
      setSearchQuery,
      handleAddPost,
      isFakeDark,
      setIsFakeDark,
   };
};
