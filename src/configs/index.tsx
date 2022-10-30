import {API_BASE_ASSET_URL, API_BASE_URL, API_KEY} from '@env';

import {APP_MODE} from '../constants/app';

const CONFIGS = {
  APP_MODE: APP_MODE.DEV,
  BASE_URL: API_BASE_URL || '',
  BASE_ASSET_URL: API_BASE_ASSET_URL || '',
  API_KEY: API_KEY || '',
};

export default CONFIGS;
