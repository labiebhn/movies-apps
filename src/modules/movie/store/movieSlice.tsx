import {createSlice} from '@reduxjs/toolkit';

interface MovieState {}

const initialState: MovieState = {};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
