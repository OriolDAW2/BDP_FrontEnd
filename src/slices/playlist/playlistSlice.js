import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    playlists: [],
    playlist: {
        name: "",
        songs: [],
    },
    page: 1,
    pages: [],
    isLoading: false,
    error: "",
}

export const playlistSlice = createSlice({
    name: "playlists",
    initialState,
    reducers: {
        startLoadingPlaylist: (state) => {
            state.isLoading = true;
        },

        setPlaylists: (state, action ) => {
            state.playlists = action.payload
            state.isLoading = false
        },

        setPlaylist: (state, action ) => {
            state.playlist = action.payload
            state.isLoading = false
        },

        setError: (state,action) => {
            state.error = action.payload
        },

        setPage: (state,action) => {
            state.page = action.payload
        },
        
        setPages: (state,action) => {
            state.pages = action.payload
        },
    }
});

export const { startLoadingPlaylist, setPlaylists, setPlaylist, setError, setPage, setPages } = playlistSlice.actions;
export default playlistSlice.reducer;