import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/phonebook-api';

export const createUser = createAsyncThunk(
  'auth/createUser',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const user = await API.createUser(name, email, password);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const user = await API.loginUser(email, password);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await API.logoutUser();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
