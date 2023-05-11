import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    events: [],
    event: {
        name: "",
        place: "",
        date: "22-05-2023T08:00:27Z",
        info: null,
    },
    page: 1,
    pages: [],
    isLoading: false,
    error: "",
}

export const eventSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        startLoadingEvents: (state) => {
            state.isLoading = true;
        },

        setEvents: (state, action ) => {
            state.events = action.payload
            state.isLoading = false
        },

        setEvent: (state, action ) => {
            state.event = action.payload
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

export const { startLoadingEvents, setEvents, setEvent, setError, setPage, setPages } = eventSlice.actions;
export default eventSlice.reducer;