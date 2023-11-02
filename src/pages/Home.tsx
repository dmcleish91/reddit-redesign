import CreatePost from '@/components/CreatePost';
import Post from '@/components/Post';
import TrendingCard from '@/components/TrendingCard';
import HomeCard from '@/components/HomeCard';
import { posts } from '@/data/mock';

function Home() {
  return (
    <>
      <div className='flex flex-grow flex-row bg-zinc-200' id='main-content'>
        <div className='w-full space-y-3 p-3 2xl:w-10/12'>
          <CreatePost />
          <div className='divide-y divide-slate-300 rounded outline outline-1 outline-slate-600'>
            {posts.map(({ postAge, subredditName, title, username }) => (
              <Post key={title} title={title} subredditName={subredditName} username={username} postAge={postAge} />
            ))}
          </div>
        </div>
        <div className='hidden space-y-3 p-3 2xl:block 2xl:w-2/12'>
          <HomeCard />
          <TrendingCard />
        </div>
      </div>
    </>
  );
}
export default Home;
