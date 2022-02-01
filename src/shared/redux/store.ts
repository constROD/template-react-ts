import TestSlice from './Test';

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { APP_ZONE } from 'shared/configs/App';

// eslint-disable-next-line
const createStore = () => {
  return configureStore({
    reducer: {
      tests: TestSlice,
    },
    middleware: getDefaultMiddleware =>
      APP_ZONE !== 'production' ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
  });
};

export default createStore;
