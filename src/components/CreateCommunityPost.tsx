import CommunityCard from '@/components/CommunityCard';
import { useParams } from 'react-router-dom';

function Community() {
  // TODO: Database call to pull recent posts for a specific subreddit
  const { id } = useParams();
  return (
    <>
      <div className='flex flex-grow flex-row bg-zinc-200' id='main-content'>
        <div className='w-full space-y-3 p-3 2xl:w-10/12'></div>
        <div className='hidden space-y-3 p-3 2xl:block 2xl:w-2/12'>
          <CommunityCard community={id!} />
        </div>
      </div>
    </>
  );
}
export default Community;
