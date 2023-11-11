import HomeCard from '@/components/HomeCard';
import SortMenu from '@/components/SortMenu';

function Profile() {
  return (
    <div className='flex flex-grow flex-row bg-gray-100' id='main-content'>
      <div className='w-full space-y-3 p-3 2xl:w-10/12'>
        <SortMenu />
      </div>
      <div className='hidden space-y-3 p-3 2xl:block 2xl:w-2/12'>
        <HomeCard />
      </div>
    </div>
  );
}
export default Profile;
