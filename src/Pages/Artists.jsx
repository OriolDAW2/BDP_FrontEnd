import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from '../usercontext';
import { useDispatch, useSelector } from 'react-redux';
import { getArtists } from '../slices/artists/thunks';
import { Artist } from './Artist';

import User from '/img/user1.png';

import './css/artists.css';

function Artists() {
  const { user, email, setUser, authToken, setAuthToken } = useContext(UserContext);
  const { artists = [], page, isLoading=true, error="", filter } = useSelector((state) => state.artists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtists(authToken, page));
  }, []);

  return (
    <div className="recommended-artists">
      <h2>Artistas</h2>
      <div className="artist-container">
        {isLoading ? "Espera..." : <>{artists.map((v) => {
          return (
            <>
              <Artist key={v.id} v={v}/>
            </>
          )   
        })}</>}
      </div>
    </div>
  );
}

export default Artists;
