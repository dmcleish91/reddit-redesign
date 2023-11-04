import { posts } from '@/data/mock';
import Post from '@/components/Post';
import SortCreatePostMenu from './SortCreatePostMenu';

function Feed() {
  return (
    <>
      <SortCreatePostMenu />
      <div className='divide-y divide-slate-300 rounded outline outline-1 outline-slate-600'>
        {posts.map(({ postAge, subredditName, title, username }) => (
          <Post key={title} title={title} subredditName={subredditName} username={username} postAge={postAge} />
        ))}
      </div>
    </>
  );
}
export default Feed;
