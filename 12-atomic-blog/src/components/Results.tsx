import { usePostContext } from '../contexts/Context';

export function Results() {
   const { posts } = usePostContext();
   return <p>🚀 {posts.length} atomic posts found</p>;
}
