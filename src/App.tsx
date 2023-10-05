import NavBar from './components/NavBar';
import CreatePost from './components/CreatePost';
import CommunityCard from './components/CommunityCard';
import Post from './components/Post';

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <NavBar />
      <div className='bg-gray-300 flex flex-row flex-grow' id='main-content'>
        <div className='space-y-4 p-4 w-full 2xl:w-10/12'>
          <CreatePost />
          <Post />
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
