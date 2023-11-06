import { Route, Routes } from 'react-router-dom';

import CreatePost from './components/CreatePost';
import Feed from './components/Feed';
import FullPost from './components/FullPost';
import NavBar from './components/NavBar';
import Community from './pages/Community';
import Home from './pages/Home';

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
      </Routes>
    </div>
  );
}
export default App;
