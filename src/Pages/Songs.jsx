import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from '../usercontext';
import { useDispatch, useSelector } from 'react-redux';
import { Song } from './Song';
import PaginationSongs from './Page/PaginationSongs';
import { getSongs } from '../slices/songs/thunks';

import './css/artists.css';

function Songs() {
  const { user, email, setUser, authToken, setAuthToken } = useContext(UserContext);
  const { songs = [], page, isLoading=true, error="" } = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  const [filterValue, setFilterValue] = useState('');

  const handlePageChange = (pageNumber) => {
    if (pageNumber !== page) {
      dispatch(getSongs(authToken, pageNumber));
    }
  }; 

  useEffect(() => {
    dispatch(getSongs(authToken, page));
  }, []);

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(filterValue.toLowerCase())
  );

  const itemsPerPage = 5;
  const pages = Math.ceil(songs.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArtists = songs.slice(startIndex, endIndex);

  return (
    <div className="recommended-artists">
      <div className="sub-menu">
        <div className="search">
          <input
            type="text"
            placeholder="Buscar"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
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
        {isLoading ? (
          "Espera..."
        ) : (
          <>
            {filteredSongs.length > 0 ? (
              filteredSongs.map((v) => <Song key={v.id} v={v} />)
            ) : (
              <p>No se encontraron canciones que coincidan con el filtro.</p>
            )}
          </>
        )}
      </div>
      <PaginationSongs totalPages={pages} currentPage={page} onPageChange={handlePageChange} setPage={(newPage) => dispatch(setPage(newPage))} />
    </div>
  );
}

export default Songs;
