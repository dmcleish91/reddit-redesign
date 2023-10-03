import NavBar from './components/NavBar';
import CreatePost from './components/CreatePost';
import PostFiltering from './components/PostFiltering';
import CommunityCard from './components/CommunityCard';

function App() {
  return (
    <div>
      <NavBar />
      <div className='h-max bg-gray-300 flex flex-row'>
        <div className='space-y-4 p-4 w-full 2xl:w-10/12'>
          <CreatePost />
          <PostFiltering />
        </div>
        <div className='p-4 hidden 2xl:w-2/12 space-y-4 2xl:block'>
          <CommunityCard />
          <div className='p-4'>
            <p className='text-xl'>Trending Communities</p>
            <p>
              <span className='underline underline-offset-1'>Sign in</span> to view
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
