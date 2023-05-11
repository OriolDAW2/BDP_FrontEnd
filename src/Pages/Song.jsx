import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../usercontext';
import { useDispatch, useSelector } from 'react-redux';

import User from '/img/user1.png';

export const Song = ({ v }) => {

  const { user, email, setUser, authToken, setAuthToken } = useContext(UserContext);
  const { songs = [], page=0, isLoading=true, error="" } = useSelector((state) => state.songs);
  const dispatch = useDispatch();
  
  return (
    <div className="artist-container">
      <div className="artist">
        <img src={User} />
        <div className="artist-details">
          <h3>Nombre: <h4 className='white'>{v.title}</h4></h3>
        </div>
      </div>
    </div>
  )
}
