import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Messages from './pages/Messages/Messages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/messages' element={<Messages />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
