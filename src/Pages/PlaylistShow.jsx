import React, { useEffect } from 'react'
import { useContext } from 'react';
import { UserContext } from '../usercontext';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPlaylist } from '../slices/playlist/thunks';
import { Song } from './Song';

import "./css/events.css";

import Playlist from '/img/playlist.jpg';

export const PlaylistShow = () => {

  const { user, email, setUser, authToken, setAuthToken } = useContext(UserContext);
  const { playlist, page=0, isLoading=true, error="" } = useSelector((state) => state.playlists);
  const { songs = [] } = useSelector((state) => state.songs);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaylist(id, authToken));
  }, []);
  
  return (
    <div className="event-show-container">
      <div className="event-show">
        <img src={Playlist} alt="Event" className="event-show-img" />
        <div className="event-show-details">
          <h3 className="event-show-title">Nombre: {playlist.name}</h3>
          <div className="event-show-info">
            <div className="event-info-item">
              <span className="event-info-label">Canciones:</span>
              <span className="event-info-value">
                {isLoading ? "Espera..." : <>{songs.map((v) => {
                  return (
                    <>
                      <Song key={v.id} v={v}/>
                    </>
                  )   
                })}</>}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}