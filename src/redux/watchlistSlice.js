import { createSlice } from '@reduxjs/toolkit';

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: [],
  reducers: {
    addToWatchlist: (state, action) => {
      state.push(action.payload);
    },
    removeFromWatchlist: (state, action) => {
      return state.filter(movie => movie.imdbID !== action.payload.imdbID);
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
