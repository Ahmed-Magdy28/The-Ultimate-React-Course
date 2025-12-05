import { useSearchContext } from '../contexts/Context';

export function SearchPosts() {
   const { searchQuery, setSearchQuery } = useSearchContext();
   return (
      <input
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
         placeholder="Search posts..."
      />
   );
}
