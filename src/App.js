// deps
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// contexsts
import { MessageProvider } from './Context/MessageContext';
import { useUser } from './Context/UserContext.js';

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
import Login from './pages/Login/Login.js';

// components
import MessageBox from './components/MessageBox/MessageBox';
import Navbar from './components/Navbar/Navbar';
import { Button } from '@mui/material';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { provider } from './firebase.js';


function App() {
  const { isLoggedIn, user } = useUser();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [user, setUser] = useState({})
  // const auth = getAuth();

  // const handleLogin = () => {
  //   signInWithPopup(auth, provider).then(result => {
  //     console.log('Result', result);
  //     setUser({
  //       name: result?.user?.displayName,
  //       photo: result?.user?.photoURL,
  //       userId: result?.user?.uid
  //     });
  //     setIsLoggedIn(true);
  //   }).catch(err => console.log('Error: ', err));
  // }

  return (
    <MessageProvider>
      <BrowserRouter>
        {!isLoggedIn ? (
          // <div style={{
          //   height: '100vh',
          //   width: '100vw',
          //   alignItems: 'center',
          //   display: 'flex',
          //   justifyContent: 'center',
          //   background: 'black',
          // }}>
          //   <Button style={{
          //     color: 'white',
          //     padding: '20px'
          //   }} onClick={handleLogin}>
          //     Login
          //   </Button>
          // </div>
          <Login />
        ) : (
          <div>
            <Navbar user={user} />
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
          </div>
        )}
      </BrowserRouter>
    </MessageProvider>
  );
}

export default App;
