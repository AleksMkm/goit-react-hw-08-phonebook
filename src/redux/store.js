import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './contacts/reducer';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});
