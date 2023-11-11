import HomeCard from '@/components/HomeCard';
import SortMenu from '@/components/SortMenu';

function Profile() {
  return (
    <div className='flex flex-grow flex-row bg-gray-100' id='main-content'>
      <div className='w-full space-y-3 p-3 xl:w-9/12'>
        <SortMenu />
      </div>
      <div className='hidden space-y-3 p-3 xl:block xl:w-3/12'>
        <HomeCard />
      </div>
    </div>
  );
}
export default Profile;
