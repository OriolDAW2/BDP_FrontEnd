import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songs: [],
    currentSong: null, // Agregamos currentSong inicialmente como null
    song: {
        title: "",
        image: "",
        audio: "",
        video: "",
        artist: [],
    },
    page: 1,
    pages: [],
    isLoading: false,
    error: "",
    isPlaying: false, 
}

export const songSlice = createSlice({
    name: "songs",
    initialState,
    reducers: {
        startLoadingSong: (state) => {
            state.isLoading = true;
        },

        setSongs: (state, action ) => {
            state.songs = action.payload
            state.isLoading = false
        },

        setSong: (state, action ) => {
            state.song = action.payload
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

        playSong: (state, action) => {
            state.currentSong = action.payload; // Actualizamos currentSong con la canción seleccionada
            state.isPlaying = true; // Establecer el estado de reproducción a true
        },
    }
});

export const { startLoadingSong, setSongs, setSong, setError, setPage, setPages, playSong } = songSlice.actions;
export default songSlice.reducer;
