import {store} from '../store';
import {LoadingType} from './service';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type InitialState = {
  loading: LoadingType;
  data?: any;
  message?: any;
  pagination?: PaginationState;
  [key: string]: any;
};
export type PaginationState = {
  page: number;
  total_pages: number;
};
