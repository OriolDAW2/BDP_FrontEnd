import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../usercontext";
import { useContext } from "react";
import { playSong } from "../slices/songs/songSlice";

import User from "/img/user1.png";
import "./css/createPlaylist.css";

export const Song = ({ v }) => {
  const { user, email, setUser, authToken, setAuthToken } = useContext(UserContext);
  const { songs = [], page, isLoading=true, error="" } = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  const handlePlaySong = () => {
    dispatch(playSong(v));
  };

  return (
    <div className="artist-container" onClick={handlePlaySong}>
      <div className="artist">
        <img src={User} />
        <div className="artist-details">
          <h4 className="white">{v.title}</h4>
          <button className="button-create" onClick={() => handlePlaySong(v)}>Play</button>
        </div>
      </div>
    </div>
  );
};
