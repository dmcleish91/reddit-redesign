import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Community from './pages/Community';

function App() {
  return (
    <div className='flex h-screen flex-col'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/b/:id' element={<Community />} />
      </Routes>
    </div>
  );
}
export default App;
