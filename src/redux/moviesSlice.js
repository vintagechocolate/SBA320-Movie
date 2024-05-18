import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = process.env.OMDB_API_KEY;
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (query) => {
  const response = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
  const data = await response.json();
  return data.Search;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchMovies.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = 'succeeded';
    },
    [fetchMovies.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default moviesSlice.reducer;
