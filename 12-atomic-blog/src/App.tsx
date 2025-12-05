import { Archive } from './components/Archive';
import { Main } from './components/Main.tsx';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { DarkButton } from './components/DarkButton.tsx';
import PostProvider from './components/Providers/PostProvider.tsx';
import SearchProvider from './components/Providers/SearchProvider.tsx';

function App() {
   return (
      <section>
         <DarkButton />
         <PostProvider>
            <SearchProvider>
               <Header />
               <Main />
               <Archive />
               <Footer />
            </SearchProvider>
         </PostProvider>
      </section>
   );
}

export default App;
