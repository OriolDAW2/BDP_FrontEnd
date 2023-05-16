import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../usercontext";
import CreatePlaylist from "./CreatePlayList";
import { Playlist } from "./Playlist";
import { getPlaylists } from "../slices/playlist/thunks";
import { setPage } from "../slices/playlist/playlistSlice";
import PaginationPlaylists from "./Page/PaginationPlaylists";

import "./css/playlist.css";

function Playlists() {
  const [showModal, setShowModal] = useState(false);
  const { user, email, setUser, authToken, setAuthToken } = useContext(UserContext);
  const { playlists = [], page, isLoading=true, error="" } = useSelector((state) => state.playlists);
  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    if (pageNumber !== page) {
      dispatch(getPlaylists(authToken, pageNumber));
    }
  };  

  useEffect(() => {
    dispatch(getPlaylists(authToken, page));
  }, [page]);

  const itemsPerPage = 5;
  const pages = Math.ceil(playlists.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPlaylists = playlists.slice(startIndex, endIndex);

  return (
    <div className="recommended-playlists">
      <div class="playlist-header">
        <h2>Playlist Recomendadas</h2>
        <button className="playlist-header-button" onClick={() => setShowModal(!showModal)}>Crear Playlist</button>
        {showModal &&
          <CreatePlaylist setShowModal={setShowModal}/>
        }
      </div>
      <div className="artist-container">
        {isLoading ? "Espera..." : <>{currentPlaylists.map((v) => {
          return (
            <>
              <Playlist key={v.id} v={v}/>
            </>
          )   
        })}</>}
      </div>
      <PaginationPlaylists totalPages={pages} currentPage={page} onPageChange={handlePageChange} setPage={(newPage) => dispatch(setPage(newPage))} />
    </div>
  );
}

export default Playlists;
