import React, { useContext, useEffect } from 'react';
import { UserContext } from '../usercontext';
import { useDispatch, useSelector } from 'react-redux';
import { getArtists } from '../slices/artists/thunks';
import { Artist } from './Artist';
import PaginationArtists from './Page/PaginationArtists';
import { setPage } from '../slices/artists/artistSlice';

import User from '/img/user1.png';

import './css/artists.css';

function Artists() {
  const { user, email, setUser, authToken, setAuthToken } = useContext(UserContext);
  const { artists = [], page, isLoading=true, error="", filter } = useSelector((state) => state.artists);
  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    if (pageNumber !== page) {
      dispatch(getArtists(authToken, pageNumber));
    }
  };

  useEffect(() => {
    dispatch(getArtists(authToken, page));
  }, [page]);

  const itemsPerPage = 5;
  const pages = Math.ceil(artists.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArtists = artists.slice(startIndex, endIndex);

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
      <PaginationArtists totalPages={pages} currentPage={page} onPageChange={handlePageChange} setPage={(newPage) => dispatch(setPage(newPage))} />
    </div>
  );
}

export default Artists;
