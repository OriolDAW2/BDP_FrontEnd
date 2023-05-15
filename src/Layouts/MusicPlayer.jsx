import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../usercontext";

import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import "./css/MusicPlayer.css";

const tracks = [
  {
    url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
    title: "Madza - Chords of Life",
    tags: ["house"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Madza - Late Night Drive",
    tags: ["dnb"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "Madza - Persistence",
    tags: ["dubstep"],
  },
];


function MusicPlayer() {

  const { user, email, setUser, authToken, setAuthToken } = useContext(UserContext);
  const { songs = [], page, isLoading=true, error="", filter } = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  return (
    <div className="music-player-container">
        <Player
          trackList={tracks}
          includeTags={false}
          includeSearch={false}
          showPlaylist={false}
          autoPlayNextTrack={true}
        />
    </div>
  );
}

export default MusicPlayer;
