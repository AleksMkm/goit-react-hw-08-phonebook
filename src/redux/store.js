import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/contacts';
import { authReducer } from 'redux/auth';

const { contacts } = contactsReducer;
const { auth } = authReducer;

const rootReducer = combineReducers({ contacts, auth });

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});
