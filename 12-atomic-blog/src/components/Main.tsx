import { memo } from 'react';
import { FormAddPost } from './FormAddPost';
import { List } from './List';

export const Main = memo(function Main() {
   return (
      <main>
         <FormAddPost />
         <Posts />
      </main>
   );
});
function Posts() {
   return (
      <section>
         <List />
      </section>
   );
}
