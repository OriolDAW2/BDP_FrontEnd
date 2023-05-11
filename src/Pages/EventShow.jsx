import React, { useEffect } from 'react'
import { useContext } from 'react';
import { UserContext } from '../usercontext';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getEvent } from '../slices/events/thunks';

import "./css/events.css";

import Event from '/img/event.jpg';

export const EventShow = () => {

  const { user, email, setUser, authToken, setAuthToken } = useContext(UserContext);
  const { event, page=0, isLoading=true, error="" } = useSelector((state) => state.events);
  const [date, dates] = event.date.split("T")
  const [hour, z] = dates.split("Z");
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvent(id, authToken));
  }, []);
  
  return (
    <div className="event-show-container">
      <div className="event-show">
        <img src={Event} alt="Event" className="event-show-img" />
        <div className="event-show-details">
          <h3 className="event-show-title">{event.name}</h3>
          <div className="event-show-info">
            <div className="event-info-item">
              <span className="event-info-label">Lugar:</span>
              <span className="event-info-value">{event.place}</span>
            </div>
            <div className="event-info-item">
              <span className="event-info-label">Fecha:</span>
              <span className="event-info-value">{date}</span>
            </div>
            <div className="event-info-item">
              <span className="event-info-label">Hora:</span>
              <span className="event-info-value">{hour}</span>
            </div>
            {/* <div className="event-info-item">
              <span className="event-info-label">Descripción:</span>
              <span className="event-info-value">{event.description}</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}