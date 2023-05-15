import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../usercontext';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import User from '/img/user1.png';

export const Playlist = ({ v }) => {

  const { user, email, setUser, authToken, setAuthToken } = useContext(UserContext);
  const { playlists = [], page=0, isLoading=true, error="" } = useSelector((state) => state.playlists);
  const dispatch = useDispatch();
  
  return (
    <div className="artist-container">
      <div className="artist">
        <img src={User} />
        <div className="artist-details">
        <Link to={"/playlists/" + v.id}><h4 className='white'>{v.name}</h4></Link>
        </div>
      </div>
    </div> 
    )
}
