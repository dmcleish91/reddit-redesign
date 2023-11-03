import { posts } from '@/data/mock';
import Post from '@/components/Post';
import CommunityCard from '@/components/CommunityCard';
import { useParams } from 'react-router-dom';
import SortCreatePostMenu from '@/components/SortCreatePostMenu';

function Community() {
  // TODO: Database call to pull recent posts for a specific subreddit
  const { id } = useParams();
  return (
    <>
      <div className='flex flex-grow flex-row bg-zinc-200' id='main-content'>
        <div className='w-full space-y-3 p-3 2xl:w-10/12'>
          <SortCreatePostMenu />
          <div className='divide-y divide-slate-300 rounded outline outline-1 outline-slate-600'>
            {posts.map(({ postAge, subredditName, title, username }) => (
              <Post key={title} title={title} subredditName={subredditName} username={username} postAge={postAge} />
            ))}
          </div>
        </div>
        <div className='hidden space-y-3 p-3 2xl:block 2xl:w-2/12'>
          <CommunityCard community={id!} />
        </div>
      </div>
    </>
  );
}
export default Community;
