import HomeCard from '@/components/HomeCard';
import TrendingCard from '@/components/TrendingCard';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className='flex flex-grow flex-row bg-gray-100' id='main-content'>
      <div className='w-full space-y-3 p-3 xl:w-9/12'>
        <Outlet />
      </div>
      <div className='hidden space-y-3 p-3 xl:block xl:w-3/12'>
        <HomeCard />
        <TrendingCard />
      </div>
    </div>
  );
}
export default Home;
