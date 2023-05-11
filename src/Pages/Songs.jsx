import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from '../usercontext';
import { useDispatch, useSelector } from 'react-redux';
import { getSongs } from '../slices/songs/thunks';
import { Song } from './Song';

import './css/artists.css';

function Songs() {
  const { user, email, setUser, authToken, setAuthToken } = useContext(UserContext);
  const { songs = [], page, isLoading=true, error="", filter } = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs(authToken, page));
  }, []);

  return (
    <div className="recommended-artists">
      <div className="sub-menu">
        <div className="search">
          <input type="text" placeholder="Buscar" />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="filters">
          <button>
            <FontAwesomeIcon icon={faFilter} />
            <span></span>
          </button>
        </div>
      </div>
      <h2>Canciones</h2>
      <div className="artist-container">
        {isLoading ? "Espera..." : <>{songs.map((v) => {
          return (
            <>
              <Song key={v.id} v={v}/>
            </>
          )   
        })}</>}
      </div>
    </div>
  );
}

export default Songs;
