import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    artists: [],
    artist: {
        name: "",
        realName: "",
        birthDate: "",
        info: null,
    },
    page: 1,
    pages: [],
    isLoading: false,
    error: "",
}

export const artistSlice = createSlice({
    name: "artists",
    initialState,
    reducers: {
        startLoadingArtists: (state) => {
            state.isLoading = true;
        },

        setArtists: (state, action ) => {
            state.artists = action.payload
            state.isLoading = false
        },

        setArtist: (state, action ) => {
            state.artist = action.payload
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

export const { startLoadingArtists, setArtists, setArtist, setError, setPage, setPages } = artistSlice.actions;
export default artistSlice.reducer;