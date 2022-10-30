export type PaginationStatus = 'next' | 'disabled' | 'reset';
export type LoadingType = 'idle' | 'pending' | 'succeeded' | 'failed';

export type ServiceGetParams = {
  params?: any;
  paginate?: PaginationStatus;
  [key: string]: any;
};

export type ServiceUpdateParams = {
  id?: string;
  data?: FormData | any;
  [key: string]: any;
};
