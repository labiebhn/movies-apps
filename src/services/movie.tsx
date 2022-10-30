import axios from 'axios';

import {ENDPOINTS} from '../constants/endpoints';

export const getMovieTopRated = (params: any) => {
  return axios.get(ENDPOINTS.MOVIE.GET_TOP_RATED, {params});
};

export const getMoviePopular = (params: any) => {
  return axios.get(ENDPOINTS.MOVIE.GET_POPULAR, {params});
};

export const getMovieNowPlaying = (params: any) => {
  return axios.get(ENDPOINTS.MOVIE.GET_NOW_PLAYING, {params});
};

export const getMovieLatest = (params: any) => {
  return axios.get(ENDPOINTS.MOVIE.GET_LATEST, {params});
};

export const getMovieUpComing = (params: any) => {
  return axios.get(ENDPOINTS.MOVIE.GET_UPCOMING, {params});
};
