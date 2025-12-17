import { memo } from 'react';
import { Results } from './Results';
import { SearchPosts } from './SearchPosts';
import { usePostContext } from '../contexts/Context';

export const Header = memo(function Header() {
   const { onClearPosts } = usePostContext();
   return (
      <header>
         <h1>
            <span>⚛️</span>The Atomic Blog
         </h1>
         <div>
            <Results />
            <SearchPosts />
            <button onClick={onClearPosts}>Clear posts</button>
         </div>
      </header>
   );
});
