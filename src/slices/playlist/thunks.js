import { startLoadingPlaylist, setError, setPlaylists, setPlaylist, setPages } from "./playlistSlice";


export const getPlaylists = (authToken, page = 0) => {
    return async (dispatch) => {
        dispatch(startLoadingPlaylist());

        const headers = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + authToken,
            },
            method: "GET",
        };
        let url = "http://equip02.insjoaquimmir.cat/api/playlists/";

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if(resposta != null) {
            dispatch(setPlaylists(resposta));
        }
    }
}

export const addPlaylist = (formulari, authToken) => {
    return async (dispatch, getState) => {

    let { name } = formulari;
    const formData = new FormData();

    formData.append("name", name);

    const data = await fetch(
      "http://equip02.insjoaquimmir.cat/api/playlists/",
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + authToken,
        },
        method: "POST",
        body: formData,
      }
    );
    const resposta = await data.json();

    if (resposta != null) {
        console.log("Playlist Creada");
    }
  };
}

export const getPlaylist = (id, authToken) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPlaylist());

        const headers = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + authToken,
            },
            method: "GET",
        };
        const url = "http://equip02.insjoaquimmir.cat/api/playlists/" + id + "/"

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if(resposta != null) {
            dispatch(setPlaylist(resposta));
        }
    };
}
