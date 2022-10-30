import {createSlice} from '@reduxjs/toolkit';

interface CoreState {}

const initialState: CoreState = {};

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export const {} = coreSlice.actions;

export default coreSlice.reducer;
