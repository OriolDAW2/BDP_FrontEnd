import React, { useContext, useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeUp, faVolumeDown } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '../usercontext';
import { playSong } from '../slices/songs/songSlice';

import './css/MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const { user, email, setUser, authToken, setAuthToken } = useContext(UserContext);
  const { song, page, isLoading=true, error="", currentSong } = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const volumeRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.volume = volume / 100;
    }
  }, [volume]);

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleVolumeChange = () => {
    setVolume(volumeRef.current.value);
  };

  const handleTimeUpdate = (event) => {
    setCurrentTime(event.target.currentTime);
    setDuration(event.target.duration);
  };

  const handleProgressClick = (event) => {
    const progressElement = progressRef.current;
    const { offsetX, offsetWidth } = event.nativeEvent;
    const progress = offsetX / offsetWidth;
    const currentTime = progress * duration;
    setCurrentTime(currentTime);
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const playSongHandler = (song) => {
    dispatch(playSong(song));
    setIsPlaying(true);
  };

  return (
    <div className="music-player">
      {currentSong && (
        <div className="song-info">
          <img src={currentSong.image} alt="Song Cover" />
          <div className="song-details">
            <h3 className='orange'>{currentSong.title}</h3>
            <h3>{currentSong.artist.name}</h3>
          </div>
        </div>
      )}
      <div className="player-controls">
        {isPlaying ? (
          <FontAwesomeIcon icon={faPause} onClick={handlePlayPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} onClick={handlePlayPause} />
        )}
        <input
          type="range"
          className="volume-slider"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          ref={volumeRef}
        />
        {volume > 50 ? (
          <FontAwesomeIcon icon={faVolumeUp} />
        ) : (
          <FontAwesomeIcon icon={faVolumeDown} />
        )}
      </div>
      <div className="progress-bar" onClick={handleProgressClick} ref={progressRef}>
        <div
          className="progress-slider"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>
      <div className="time-display">
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
      <audio
        ref={audioRef}
        src={currentSong && currentSong.audio}
        onTimeUpdate={handleTimeUpdate}
      ></audio>
    </div>
  );
};
export default MusicPlayer;
