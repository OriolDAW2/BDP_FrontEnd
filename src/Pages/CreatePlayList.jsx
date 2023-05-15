import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '../usercontext';

import './css/CreatePlaylist.css';
import { addPlaylist, getPlaylist } from '../slices/playlist/thunks';

const CreatePlaylist = ({setShowModal}) => {
  const [playlistName, setPlaylistName] = useState('');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const { user, email, setUser, authToken, setAuthToken } = useContext(UserContext);
  const { songs = [], page, isLoading=true, error="", filter } = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  const [formulari, setFormulari] = useState({});

  const onClose = () => {
    setShowModal(false);
  }

  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.type && e.target.type==="file") {
      console.log(e.target.files[0].name);
      setFormulari({
        ...formulari,
        [e.target.name]: e.target.files[0],
      });
    } else {
      // Canviem l'element de l'objecte de l'estat
      setFormulari({
        ...formulari,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="modal-background">
      <div className="modal-content">
        <h1>Create Playlist</h1>
        <form>
          <div>
            <label htmlFor="playlist-name">Playlist Name:</label>
            <input name="name" className="input" type="text" id="playlist-name" value={formulari.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="track-name">Add Track:</label>
            <select className="input" id="track-name">
              <option value="">Select a Song</option>
              {songs.map((song) => (
                <option key={song.id} value={song.title}>
                  {song.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button className="button" type="submit" onClick={(e) => { e.preventDefault(); onClose(); dispatch( addPlaylist(formulari, authToken))} }>Create Playlist</button>
          </div>
        </form>
        <button className="close-button" onClick={() => onClose()}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CreatePlaylist;

