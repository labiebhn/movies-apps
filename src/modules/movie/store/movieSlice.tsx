import {createSlice} from '@reduxjs/toolkit';

import {InitialState} from '../../../types/store';
import {
  getMovieBanner,
  getMovieNowPlaying,
  getMovieOther,
  getMoviePopular,
  getMovieTopRated
} from './movieThunk';

interface MovieState {
  banner: InitialState;
  nowPlaying: InitialState;
  topRated: InitialState;
  popular: InitialState;
  other: InitialState;
}

const initialState: MovieState = {
  banner: {
    loading: 'idle',
    data: [],
    message: '',
  },
  nowPlaying: {
    loading: 'idle',
    data: [],
    pagination: {
      page: 0,
      total_pages: 0,
    },
    message: '',
  },
  topRated: {
    loading: 'idle',
    data: [],
    pagination: {
      page: 0,
      total_pages: 0,
    },
    message: '',
  },
  popular: {
    loading: 'idle',
    data: [],
    pagination: {
      page: 0,
      total_pages: 0,
    },
    message: '',
  },
  other: {
    loading: 'idle',
    data: [],
    pagination: {
      page: 0,
      total_pages: 0,
    },
    message: '',
  },
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getMovieBanner.pending, (state, action) => {
      state.banner.loading = 'pending';
    });
    builder.addCase(getMovieBanner.fulfilled, (state, action) => {
      const {payload} = action;
      state.banner.loading = 'succeeded';
      state.banner.data = payload?.results;
    });
    builder.addCase(getMovieBanner.rejected, (state, action) => {
      state.banner.loading = 'failed';
      state.banner.data = [];
      state.banner.message = action.payload;
    });

    builder.addCase(getMovieNowPlaying.pending, (state, action) => {
      state.nowPlaying.loading = 'pending';
    });
    builder.addCase(getMovieNowPlaying.fulfilled, (state, action) => {
      if (action.payload) {
        const {payload} = action;
        state.nowPlaying.loading = 'succeeded';
        state.nowPlaying.data = payload?.results;
        state.nowPlaying.pagination = payload?.pagination;
      } else {
        state.nowPlaying.loading = 'succeeded';
      }
    });
    builder.addCase(getMovieNowPlaying.rejected, (state, action) => {
      state.nowPlaying.loading = 'failed';
      state.nowPlaying.data = [];
      state.nowPlaying.message = action.payload;
    });

    builder.addCase(getMovieTopRated.pending, (state, action) => {
      state.topRated.loading = 'pending';
    });
    builder.addCase(getMovieTopRated.fulfilled, (state, action) => {
      if (action.payload) {
        const {payload} = action;
        state.topRated.loading = 'succeeded';
        state.topRated.data = payload?.results;
        state.topRated.pagination = payload?.pagination;
      } else {
        state.topRated.loading = 'succeeded';
      }
    });
    builder.addCase(getMovieTopRated.rejected, (state, action) => {
      state.topRated.loading = 'failed';
      state.topRated.data = [];
      state.topRated.message = action.payload;
    });

    builder.addCase(getMoviePopular.pending, (state, action) => {
      state.popular.loading = 'pending';
    });
    builder.addCase(getMoviePopular.fulfilled, (state, action) => {
      if (action.payload) {
        const {payload} = action;
        state.popular.loading = 'succeeded';
        state.popular.data = payload?.results;
        state.popular.pagination = payload?.pagination;
      } else {
        state.popular.loading = 'succeeded';
      }
    });
    builder.addCase(getMoviePopular.rejected, (state, action) => {
      state.popular.loading = 'failed';
      state.popular.data = [];
      state.popular.message = action.payload;
    });

    builder.addCase(getMovieOther.pending, (state, action) => {
      state.other.loading = 'pending';
    });
    builder.addCase(getMovieOther.fulfilled, (state, action) => {
      if (action.payload) {
        const {payload} = action;
        state.other.loading = 'succeeded';
        state.other.data = payload?.results;
        state.other.pagination = payload?.pagination;
      } else {
        state.other.loading = 'succeeded';
      }
    });
    builder.addCase(getMovieOther.rejected, (state, action) => {
      state.other.loading = 'failed';
      state.other.data = [];
      state.other.message = action.payload;
    });
  },
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
