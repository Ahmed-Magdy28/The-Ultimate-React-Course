import { Archive } from './components/Archive.tsx';
import { Main } from './components/Main.tsx';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { DarkButton } from './components/DarkButton.tsx';
import PostProvider from './contexts/Providers/PostProvider.tsx';

function App() {
   return (
      <section>
         <DarkButton />
         <PostProvider>
            <Header />
            <Main />
            <Archive />
            <Footer />
         </PostProvider>
      </section>
   );
}

export default App;
