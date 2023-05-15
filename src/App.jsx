import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { LoginRegister } from './auth/LoginRegister';
import { UserContext } from './usercontext';

import Menu from './Layouts/MenuPrincipal';
import Artists from './Pages/Artists';
import Playlists from './Pages/Playlists';
// import LandingPage from './Pages/LandingPage';
// import MusicPlayer from './Layouts/MusicPlayer';
import Events from './Pages/Events';
import Songs from './Pages/Songs';
import CreatePlaylist from './Pages/CreatePlayList';
import Footer from './Layouts/Footer';

import { EventShow } from './Pages/EventShow';
import { PlaylistShow } from './Pages/PlaylistShow';

import './App.css';

function App() {

  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    // Recuperar el token de localStorage y establecerlo en el estado
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
    }
  }, []);

  return (
    <>
      <UserContext.Provider value={{ authToken, setAuthToken }}>
        {authToken ? (
          <Routes>
            {/* <Route path="/landing" element={<LandingPage/>}/> */}
            <Route path="/" element={
              <>
                <Menu/>
                <Songs/>
                <Artists/>
                <Playlists/>
                <Events/>
                <Footer/>
                {/* <MusicPlayer/> */}
              </>
            }/>
            {/* <Route path="/events" element={<EventPage/>}/> */}
            <Route path="/createPlayList" element={<CreatePlaylist/>}/>
            <Route path="/events/:id" element={<EventShow/>}/>
            <Route path="/playlists/:id" element={<PlaylistShow/>}/>
          </Routes>
        ) : (
          <LoginRegister/>
        )}
      </UserContext.Provider>
    </>
  )
}

export default App
