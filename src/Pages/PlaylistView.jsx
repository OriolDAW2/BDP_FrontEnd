import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../usercontext';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import User from '/img/user1.png';

export const PlaylistView = ({ v }) => {

  const { user, email, setUser, authToken, setAuthToken } = useContext(UserContext);
  const { playlists = [], page=0, isLoading=true, error="" } = useSelector((state) => state.playlists);
  const dispatch = useDispatch();
  
  return (
    <div className="artist-container">
      <div className="artist">
        <img src={"http://equip02.insjoaquimmir.cat/" + v.image} />
        <div className="artist-details">
          <h4 className='white'>{v.title}</h4>
        </div>
      </div>
    </div> 
    )
}
