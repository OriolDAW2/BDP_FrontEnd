import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LoginRegister } from './auth/LoginRegister';
import { UserContext } from './usercontext';

import Menu from './Layouts/MenuPrincipal';
import Artists from './Pages/Artists';
import Playlists from './Pages/Playlists';
import Events from './Pages/Events';
import Songs from './Pages/Songs';
import CreatePlaylist from './Pages/CreatePlayList';
import Footer from './Layouts/Footer';
import MusicPlayer from './MusicPlayer/MusicPlayer';
import ProfilePage from './Layouts/Profile';
import SupportPage from './Layouts/SupportPage';
import TermsAndConditions from './Layouts/TermsAndConditions';
import AboutUs from './Layouts/AboutUs';

import { EventShow } from './Pages/EventShow';
import { PlaylistShow } from './Pages/PlaylistShow';

import './App.css';

function App() {
  const [authToken, setAuthToken] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const songsRef = useRef(null);
  const artistsRef = useRef(null);
  const playlistsRef = useRef(null);
  const eventsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (token) {
      setAuthToken(token);
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      const section = location.hash.substring(1);
      scrollToSection(section);
    }
  }, [location]);

  const scrollToSection = (section) => {
    switch (section) {
      case 'canciones':
        songsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'artistas':
        artistsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'playlists':
        playlistsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'eventos':
        eventsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <UserContext.Provider value={{ username, setUsername, email, setEmail, authToken, setAuthToken }}>
        {authToken ? (
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Menu handleMenuClick={scrollToSection} />
                  <div ref={songsRef}>
                    <Songs />
                  </div>
                  <div ref={artistsRef}>
                    <Artists />
                  </div>
                  <div ref={playlistsRef}>
                    <Playlists />
                  </div>
                  <div ref={eventsRef}>
                    <Events />
                  </div>
                  <MusicPlayer />
                  <Footer />
                </>
              }
            />
            <Route path="/createPlayList" element={<CreatePlaylist />} />
            <Route path="/events/:id" element={<EventShow />} />
            <Route path="/playlists/:id" element={<PlaylistShow />} />
            <Route path="/profile" element={<><ProfilePage /><Menu handleMenuClick={scrollToSection} /><Footer/></>} />
            <Route path="/support" element={<><SupportPage/><Menu/><Footer/></>} />
            <Route path="/terms" element={<><TermsAndConditions/><Menu/><Footer/></>} />
            <Route path="/about" element={<><AboutUs/><Menu/><Footer/></>} />
          </Routes>
        ) : (
          <LoginRegister />
        )}
      </UserContext.Provider>
    </>
  );
}

export default App;
