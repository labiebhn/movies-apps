import Splash from '../modules/core/screens/splash';
import MovieDetail from '../modules/movie/screens/movie-detail';
import MovieList from '../modules/movie/screens/movie-list';

export const routes = [
  {
    key: 'splash',
    name: 'splash',
    component: Splash,
    options: {headerShown: false},
  },
  {
    key: 'movie-list',
    name: 'movie-list',
    component: MovieList,
    options: {headerShown: false},
  },
  {
    key: 'movie-detail',
    name: 'movie-detail',
    component: MovieDetail,
    options: {headerShown: false},
  },
];
