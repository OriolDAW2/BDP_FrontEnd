import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../usercontext';
import { useDispatch, useSelector } from 'react-redux';

export const Artist = ({ v }) => {

  const { user, email, setUser, authToken, setAuthToken } = useContext(UserContext);
  const { artists = [], page=0, isLoading=true, error="" } = useSelector((state) => state.artists);
  const dispatch = useDispatch();
  
  return (
    <div className="artist-container">
      <div className="artist">
        <img src={v.image} />
        <div className="artist-details">
          <h4 className='white'>{v.name}</h4>
        </div>
      </div>
    </div>
  )
}
