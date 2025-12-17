import { usePostContext } from '../contexts/Context';

export function SearchPosts() {
   const { searchQuery, setSearchQuery } = usePostContext();
   return (
      <input
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
         placeholder="Search posts..."
      />
   );
}
