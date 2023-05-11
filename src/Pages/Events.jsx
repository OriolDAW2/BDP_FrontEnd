import React, { useContext, useEffect } from 'react';
import { UserContext } from '../usercontext';
import { useDispatch, useSelector } from 'react-redux';
import { Event } from './Event';
import { getEvents } from '../slices/events/thunks';

import User from '/img/user1.png';

import './css/events.css';

function Events() {
  const { user, email, setUser, authToken, setAuthToken } = useContext(UserContext);
  const { events = [], page, isLoading=true, error="", filter } = useSelector((state) => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents(authToken, page));
  }, []);

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
    </div>
  );
}

export default Events;
