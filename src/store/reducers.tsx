import {combineReducers} from '@reduxjs/toolkit';

import coreSlice from '../modules/core/store/coreSlice';
import movieSlice from '../modules/movie/store/movieSlice';

const rootReducers = combineReducers({
  core: coreSlice,
  movie: movieSlice,
});

export default rootReducers;
