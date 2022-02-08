import UserSlice from './User';

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { APP_ZONE } from 'shared/configs/App';

const config = configureStore({
  reducer: {
    user: UserSlice,
  },
  middleware: getDefaultMiddleware =>
    APP_ZONE !== 'production'
      ? getDefaultMiddleware({ serializableCheck: false }).concat(logger)
      : getDefaultMiddleware({ serializableCheck: false }),
});

const createStore = (): typeof config => config;

export default createStore;
