// deps
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// contexsts
import { MessageProvider } from './Context/MessageContext';

// styles
import './App.css';

// pages
import Home from './pages/Home/Home';
import Messages from './pages/Messages/Messages';
import Profile from './pages/Profile/Profile';
import Analytics from './pages/Analytics/Analytics';
import Groups from './pages/Groups/Groups';
import SavedItems from './pages/SavedItems/SavedItems';
import Newsletters from './pages/Newsletters/Newsletters';
import Events from './pages/Events/Events';
import About from './pages/FooterPages/About/About';
import Accessibility from './pages/FooterPages/Accessibility/Accessibility';
import HelpCenter from './pages/FooterPages/AdChoices/AdChoices';
import AdChoices from './pages/FooterPages/AdChoices/AdChoices';
import Advertising from './pages/FooterPages/Advertising/Advertising';
import MyNetwork from './pages/MyNetwork/MyNetwork';
import Notifications from './pages/Notifications/Notifications';
import Jobs from './pages/Jobs/Jobs';

// components
import MessageBox from './components/MessageBox/MessageBox';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <MessageProvider>
      <BrowserRouter>
        <Navbar />
        <MessageBox />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/messaging' element={<Messages />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/saved-items' element={<SavedItems />} />
          <Route path='/groups' element={<Groups />} />
          <Route path='/newsletters' element={<Newsletters />} />
          <Route path='/events' element={<Events />} />
          <Route path='/about' element={<About />} />
          <Route path='/accessibility' element={<Accessibility />} />
          <Route path='/help-center' element={<HelpCenter />} />
          <Route path='/ad-choices' element={<AdChoices />} />
          <Route path='/advertising' element={<Advertising />} />
          <Route path='/my-network' element={<MyNetwork />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='/jobs' element={<Jobs />} />
        </Routes>
      </BrowserRouter>
    </MessageProvider>
  );
}

export default App;
