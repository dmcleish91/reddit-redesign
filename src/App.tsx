import NavBar from './components/NavBar';
import CreatePost from './components/CreatePost';
import CommunityCard from './components/CommunityCard';
import Post from './components/Post';
import TrendingCard from './components/TrendingCard';

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <NavBar />
      <div className='bg-gray-300 flex flex-row flex-grow' id='main-content'>
        <div className='space-y-2 p-4 w-full 2xl:w-10/12'>
          <CreatePost />
          {posts.map(({ postAge, subredditName, title, username }) => (
            <Post title={title} subredditName={subredditName} username={username} postAge={postAge} />
          ))}
        </div>
        <div className='p-4 hidden 2xl:w-2/12 space-y-4 2xl:block'>
          <CommunityCard />
          <TrendingCard />
        </div>
      </div>
    </div>
  );
}

export default App;

const posts = [
  {
    title: 'Breaking News: Supreme Court Issues Landmark Ruling on Free Speech',
    subredditName: 'News',
    username: 'NewsJunkie123',
    postAge: '2 hours ago',
  },
  {
    title: 'Tech Giants Announce Collaboration to Tackle Cybersecurity Threats',
    subredditName: 'Technology',
    username: 'TechWizard',
    postAge: '5 hours ago',
  },
  {
    title: 'Astronomers Discover New Exoplanet with Potential for Life',
    subredditName: 'Science',
    username: 'Stargazer42',
    postAge: '12 hours ago',
  },
  {
    title: 'Recipe of the Day: Delicious Homemade Pizza',
    subredditName: 'Food',
    username: 'FoodieChef',
    postAge: '1 hour ago',
  },
  {
    title: 'Movie Review: "Inception" - Mind-Bending Thriller Leaves Viewers in Awe',
    subredditName: 'Movies',
    username: 'Cinephile87',
    postAge: '8 hours ago',
  },
  {
    title: 'Travel Diary: Exploring the Serene Beauty of the Swiss Alps',
    subredditName: 'Travel',
    username: 'WanderlustAdventurer',
    postAge: '16 hours ago',
  },
  {
    title: 'Fitness Tips: How to Stay Motivated and Achieve Your Goals',
    subredditName: 'Fitness',
    username: 'FitLifeFanatic',
    postAge: '3 hours ago',
  },
];
