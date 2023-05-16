import React, { useContext, useEffect } from 'react';
import { UserContext } from '../usercontext';
import { useDispatch, useSelector } from 'react-redux';
import { Event } from './Event';
import { getEvents } from '../slices/events/thunks';
import PaginationEvents from './Page/PaginationEvents';

import User from '/img/user1.png';

import './css/events.css';

function Events() {
  const { user, email, setUser, authToken, setAuthToken } = useContext(UserContext);
  const { events = [], page, isLoading=true, error="", filter } = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    if (pageNumber !== page) {
      dispatch(getEvents(authToken, pageNumber));
    }
  };  

  useEffect(() => {
    dispatch(getEvents(authToken, page));
  }, [page]);

  const itemsPerPage = 5;
  const pages = Math.ceil(events.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPlaylists = events.slice(startIndex, endIndex);

  return (
    <div className="recommended-artists">
      <h2>Eventos</h2>
      <div className="artist-container">
        {isLoading ? "Espera..." : <>{events.map((v) => {
          return (
            <>
              <Event key={v.id} v={v}/>
            </>
          )   
        })}</>}
      </div>
      <PaginationEvents totalPages={pages} currentPage={page} onPageChange={handlePageChange} setPage={(newPage) => dispatch(setPage(newPage))} />
    </div>
  );
}

export default Events;
