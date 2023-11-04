import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Community from './pages/Community';
import Feed from './components/Feed';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <div className='flex h-screen flex-col'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/b/:id' element={<Community />}>
          <Route index element={<Feed />} />
          <Route path='post' element={<CreatePost />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
