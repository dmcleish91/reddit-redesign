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
    <Card className='w-full'>
      <div className='flex flex-row items-center gap-1 px-4 pt-2'>
        <p className='text-sm text-blue-500'>TheStygianSun</p>
        <p className='text-sm text-gray-500'>commented in</p>
        <p className='text-sm text-gray-500 font-medium'>How are you suppose to beat this driver?</p>
        <p className='text-sm text-gray-500'>&#x2022;</p>
        <p className='text-sm font-semibold'>Formula One</p>
        <p className='text-sm text-gray-500'>&#x2022;</p>
        <p className='text-sm text-gray-500'>Discussion by Other-Barry-1</p>
      </div>

      <div className='flex flex-row pb-2 gap-4 hover:outline hover:outline-1'>
        <div className='border-l border-gray-400 border-dashed ml-4 mb-2' />
        <div className='rounded bg-cyan-50 w-full mr-4 p-2'>
          <div className='flex flex-row items-center gap-1'>
            <p className='text-black text-xs'>TheStygianSun</p>
            <p className='text-xs text-gray-500'>&#x2022;</p>
            <p className='text-gray-500 text-xs'>49 points</p>
            <p className='text-xs text-gray-500'>&#x2022;</p>
            <p className='text-gray-500 text-xs'>6 hours ago</p>
          </div>
          <div className='flex flex-row items-center'>
            <p className='text-black text-sm'>Mercedes: “that’s the neat part, you don’t.”</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
