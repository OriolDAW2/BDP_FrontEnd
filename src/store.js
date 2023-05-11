import { configureStore } from '@reduxjs/toolkit'
import artistSlice from './slices/artists/artistSlice'
import eventSlice from './slices/events/eventSlice'
import playlistSlice from './slices/playlist/playlistSlice'
import songSlice from './slices/songs/songSlice'

export const store = configureStore({
  reducer: {
    artists: artistSlice,
    events: eventSlice,
    playlists: playlistSlice,
    songs: songSlice,
  },
})