import {createAsyncThunk} from '@reduxjs/toolkit';

import {MOVIE} from '../../../services';
import {ServiceGetParams} from '../../../types/service';
import {RootState} from '../../../types/store';
import {
  hasNextPage,
  setErrorMessage,
  setPaginationData,
  setPaginationParams
} from '../../../utils/helpers';

export const getMovieBanner = createAsyncThunk(
  'movie/getMovieBanner',
  async (params: undefined, {rejectWithValue}) => {
    try {
      let response = await MOVIE.getMovieUpComing(params);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(setErrorMessage(error));
    }
  },
);

export const getMovieNowPlaying = createAsyncThunk(
  'movie/getMovieNowPlaying',
  async ({params, paginate}: ServiceGetParams, {rejectWithValue, getState}) => {
    try {
      const {movie} = getState() as RootState;
      if (
        hasNextPage(movie.nowPlaying.pagination) ||
        paginate === 'reset' ||
        paginate === 'disabled'
      ) {
        params = setPaginationParams(params, movie.nowPlaying, paginate);
        let response = await MOVIE.getMovieNowPlaying(params);
        const {page, total_pages} = response.data;
        response.data.pagination = {page, total_pages};
        response.data.results = setPaginationData(
          movie.nowPlaying.data,
          response.data.results,
          paginate,
        );
        return response.data;
      } else {
        return null;
      }
    } catch (error: any) {
      return rejectWithValue(setErrorMessage(error));
    }
  },
);

export const getMovieTopRated = createAsyncThunk(
  'movie/getMovieTopRated',
  async ({params, paginate}: ServiceGetParams, {rejectWithValue, getState}) => {
    try {
      const {movie} = getState() as RootState;
      if (
        hasNextPage(movie.topRated.pagination) ||
        paginate === 'reset' ||
        paginate === 'disabled'
      ) {
        params = setPaginationParams(params, movie.topRated, paginate);
        let response = await MOVIE.getMovieTopRated(params);
        const {page, total_pages} = response.data;
        response.data.pagination = {page, total_pages};
        response.data.results = setPaginationData(
          movie.topRated.data,
          response.data.results,
          paginate,
        );
        return response.data;
      } else {
        return null;
      }
    } catch (error: any) {
      return rejectWithValue(setErrorMessage(error));
    }
  },
);

export const getMoviePopular = createAsyncThunk(
  'movie/getMoviePopular',
  async ({params, paginate}: ServiceGetParams, {rejectWithValue, getState}) => {
    try {
      const {movie} = getState() as RootState;
      if (
        hasNextPage(movie.popular.pagination) ||
        paginate === 'reset' ||
        paginate === 'disabled'
      ) {
        params = setPaginationParams(params, movie.popular, paginate);
        let response = await MOVIE.getMoviePopular(params);
        const {page, total_pages} = response.data;
        response.data.pagination = {page, total_pages};
        response.data.results = setPaginationData(
          movie.popular.data,
          response.data.results,
          paginate,
        );
        return response.data;
      } else {
        return null;
      }
    } catch (error: any) {
      return rejectWithValue(setErrorMessage(error));
    }
  },
);

export const getMovieOther = createAsyncThunk(
  'movie/getMovieOther',
  async ({params, paginate}: ServiceGetParams, {rejectWithValue, getState}) => {
    try {
      const {movie} = getState() as RootState;
      if (
        hasNextPage(movie.other.pagination) ||
        paginate === 'reset' ||
        paginate === 'disabled'
      ) {
        params = setPaginationParams(params, movie.other, paginate);
        let response = await MOVIE.getMoviePopular(params);
        const {page, total_pages} = response.data;
        response.data.pagination = {page, total_pages};
        response.data.results = setPaginationData(
          movie.other.data,
          response.data.results,
          paginate,
        );
        return response.data;
      } else {
        return null;
      }
    } catch (error: any) {
      return rejectWithValue(setErrorMessage(error));
    }
  },
);
