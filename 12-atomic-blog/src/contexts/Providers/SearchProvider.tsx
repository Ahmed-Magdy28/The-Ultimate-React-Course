import type { ReactNode } from 'react';
import { SearchContext } from '../../contexts/Context';
import { useApp } from '../../logic/useApp';

export default function SearchProvider({ children }: { children: ReactNode }) {
   const { searchQuery, setSearchQuery } = useApp();
   return (
      <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
         {children}
      </SearchContext.Provider>
   );
}
