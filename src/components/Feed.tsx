import Post from '@/components/Post';
import { posts } from '@/data/mock';

import SortCreatePostMenu from './SortCreatePostMenu';

function Feed() {
  return (
    <>
      <SortCreatePostMenu />
      <div className='divide-y divide-slate-300 rounded border border-slate-300'>
        {posts.map(({ postAge, subredditName, title, username }) => (
          <Post key={title} title={title} subredditName={subredditName} username={username} postAge={postAge} />
        ))}
      </div>
    </>
  );
}
export default Feed;
