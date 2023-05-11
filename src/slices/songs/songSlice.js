import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songs: [],
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
    }
});

export const { startLoadingSong, setSongs, setSong, setError, setPage, setPages } = songSlice.actions;
export default songSlice.reducer;