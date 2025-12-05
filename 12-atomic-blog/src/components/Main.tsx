import { FormAddPost } from './FormAddPost';
import { List } from './List';

export function Main() {
   return (
      <main>
         <FormAddPost />
         <Posts />
      </main>
   );
}
function Posts() {
   return (
      <section>
         <List />
      </section>
   );
}
