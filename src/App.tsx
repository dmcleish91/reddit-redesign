import { Route, Routes } from 'react-router-dom';

import CreatePost from './components/CreatePost';
import Feed from './components/Feed';
import FullPost from './components/FullPost';
import NavBar from './components/NavBar';
import Community from './pages/Community';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <div className='flex h-screen flex-col'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Feed />} />
          <Route path='post' element={<CreatePost />} />
        </Route>
        <Route path='/b/:id' element={<Community />}>
          <Route index element={<Feed />} />
          <Route path='post' element={<CreatePost />} />
          <Route path='comments/:postid' element={<FullPost />} />
        </Route>
        <Route path='/user/:username' element={<Profile />} />
        <Route path='settings' element={<h1>Settings Page</h1>} />
      </Routes>
    </div>
  );
}
export default App;
