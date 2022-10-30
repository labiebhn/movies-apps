import CONFIGS from '../configs';
import {PaginationStatus} from '../types/service';
import {PaginationState} from '../types/store';

export const setImageUrl = (path: string) => {
  let result = path;
  if (path && !path?.includes(CONFIGS.BASE_URL)) {
    result = `${CONFIGS.BASE_ASSET_URL}${path}`;
  }
  return result;
};

export const setErrorMessage = (action: any) => {
  let error = action?.paylaod || action;
  let message =
    error?.response?.data?.data?.message ??
    error?.response?.data?.meta?.message ??
    error?.response?.data?.message ??
    error?.response?.message ??
    error?.message ??
    'Server Sedang Mengalami Gangguan';

  if (
    error?.response?.status === 500 ||
    error?.response?.data?.meta?.status === 500
  ) {
    message = 'Server Sedang Mengalami Gangguan';
  }

  return message;
};

export const setPaginationParams = (
  params: any,
  state: any,
  paginate?: PaginationStatus,
) => {
  if (paginate === 'reset' || paginate === 'disabled') {
    params.page = 1;
  } else if (paginate === 'next') {
    params.page = state?.pagination?.page + 1;
  }
  return params;
};

export const setPaginationData = (
  currentData: any,
  nextData: any,
  paginate?: PaginationStatus,
) => {
  if (paginate === 'reset' || paginate === 'disabled') {
    currentData = nextData;
  } else if (paginate === 'next') {
    currentData = [...currentData, ...nextData];
  }
  return currentData;
};

export const hasNextPage = (paginate: PaginationState | undefined) => {
  let result = false;
  if (paginate) {
    result = paginate.page < paginate.total_pages;
  }
  return result;
};
