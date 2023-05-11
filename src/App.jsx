import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { LoginRegister } from './auth/LoginRegister';
import { UserContext } from './usercontext';

import Menu from './Layouts/MenuPrincipal';
import Artists from './Pages/Artists';
import Playlists from './Pages/Playlists';
import LandingPage from './Pages/LandingPage';
// import MusicPlayer from './Layouts/MusicPlayer';
import Songs from './Pages/Songs';
import CreatePlaylist from './Pages/CreatePlayList';
import { EventShow } from './Pages/EventShow';

import './App.css';
import Events from './Pages/Events';

function App() {

  let [authToken, setAuthToken] = useState("");

  return (
    
    <>
      <UserContext.Provider value= { { authToken, setAuthToken }}>
      {authToken ? (
        <Routes>
          <Route path="/landing" element={<LandingPage/>}/>
          <Route path="/" element={
            <>
              <Menu/>
              <Songs/>
              <Artists/>
              <Playlists/>
              <Events/>

              {/* <MusicPlayer/> */}
            </>
          }/>
          {/* <Route path="/events" element={<EventPage/>}/> */}
          <Route path="/createPlayList" element={<CreatePlaylist/>}/>
          <Route path="/events/:id" element={<EventShow/>}/>


        </Routes>): <LoginRegister/> }
      
      </UserContext.Provider>
    </>
  )
}

export default App
