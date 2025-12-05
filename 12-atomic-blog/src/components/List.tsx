import { usePostContext } from '../contexts/Context';
import type { singlePostType } from '../types';

export function List() {
   const { posts } = usePostContext();
   return (
      <ul>
         {posts.map((post, i) => (
            <Post title={post.title} body={post.body} key={i} />
         ))}
      </ul>
   );
}
function Post({ title, body }: singlePostType) {
   return (
      <li>
         <h3>{title}</h3>
         <p>{body}</p>
      </li>
   );
}
