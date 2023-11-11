import SortMenu from '@/components/SortMenu';
import UserInfoCard from '@/components/UserInfoCard';
import { Card } from '@/components/ui/card';

function Profile() {
  return (
    <div className='flex flex-grow flex-row bg-gray-100' id='main-content'>
      <div className='w-full space-y-3 p-3 xl:w-9/12'>
        <SortMenu />
        <div>
          <RecentComment />
        </div>
      </div>
      <div className='hidden space-y-3 p-3 xl:block xl:w-3/12'>
        <UserInfoCard />
      </div>
    </div>
  );
}
export default Profile;

function RecentComment() {
  return (
    <Card className='w-full p-4'>
      <div className='flex flex-row items-center gap-1'>
        <p className='text-sm text-gray-500'>TheStygianSun</p>
        <p className='text-sm text-gray-500'>commented in</p>
        <p className='text-sm text-gray-500'>Post</p>
        <p className='text-sm text-gray-500'>&#x2022;</p>
        <p className='text-sm text-gray-500'>by user</p>

        <p className='text-lg font-semibold'>Subreddit</p>
      </div>
    </Card>
  );
}
