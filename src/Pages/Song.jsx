import React from "react";
import { useDispatch } from "react-redux";
import { UserContext } from "../usercontext";
import { useContext } from "react";
import { playSong } from "../slices/songs/songSlice";

import User from "/img/user1.png";
import "./css/createPlaylist.css";

export const Song = ({ v }) => {
  const dispatch = useDispatch();
  const { authToken } = useContext(UserContext);

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
