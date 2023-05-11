import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faBackward, faForward, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

import "./css/MusicPlayer.css";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  function handlePlayPauseClick() {
    setIsPlaying(!isPlaying);
  }

  function handleBackwardClick() {
    // TODO: Implement backward function
  }

  function handleForwardClick() {
    // TODO: Implement forward function
  }

  function handleTimeUpdate(e) {
    setCurrentTime(e.target.currentTime);
    setDuration(e.target.duration);
  }

  function handleProgressClick(e) {
    const progressWidth = e.currentTarget.offsetWidth;
    const clickPosition = e.nativeEvent.offsetX;
    const percentage = (clickPosition / progressWidth);
    const newTime = duration * percentage;

    setCurrentTime(newTime);
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  return (
    <div className="music-player-container">
      <div className="music-player">
        <div className="music-info">
          <img src="/img/user1.png" alt="Music Cover" className="music-cover" />
          <div className="music-details">
            <h3 className="music-title">Song Title</h3>
            <p className="music-artist">Artist Name</p>
          </div>
        </div>
        
        <div className="music-progress" onClick={handleProgressClick}>
            <div className="progress-bar" style={{ width: `${(currentTime / duration) * 100}%` }} />
            <div className="music-controls">
                <div className="progress-time">
                    <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
                </div>
                <button onClick={handleBackwardClick} className="control-button">
                    <FontAwesomeIcon icon={faBackward} />
                </button>
                <button onClick={handlePlayPauseClick} className="control-button">
                    {isPlaying ? (
                    <FontAwesomeIcon icon={faPause} />
                    ) : (
                    <FontAwesomeIcon icon={faPlay} />
                    )}
                </button>
                <button onClick={handleForwardClick} className="control-button">
                    <FontAwesomeIcon icon={faForward} />
                </button>
            </div>
        </div>
        <div className="music-volume">
            <FontAwesomeIcon  className="volume-icon" icon={faVolumeUp} />
            <div className="volume-slider" />
        </div>
        </div>
    </div>
  );
}

export default MusicPlayer;
