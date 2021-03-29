import { createSlice } from '@reduxjs/toolkit';
import { authOperations, authActions } from 'redux/auth';

const { createUser, loginUser, logoutUser, fetchCurrentUser } = authOperations;
const { toggleModal, nullifyError } = authActions;

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isFetchingCurrentUser: false,
  isModalOpened: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [nullifyError](state) {
      state.error = null;
    },
    [toggleModal](state, { payload }) {
      state.isModalOpened = payload;
    },
    [createUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      // state.token = payload.token;
      // state.isLoggedIn = true;
    },
    [createUser.pending](state) {
      state.error = null;
    },
    [createUser.rejected](state, { payload }) {
      state.error = payload;
    },
    [loginUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [loginUser.pending](state) {
      state.error = null;
    },
    [loginUser.rejected](state, { payload }) {
      state.error = payload;
    },
    [logoutUser.fulfilled](state) {
      state.user = initialState.user;
      state.token = null;
      state.isLoggedIn = false;
    },
    [logoutUser.pending](state) {
      state.error = null;
    },
    [logoutUser.rejected](state, { payload }) {
      state.error = payload;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.pending](state) {
      state.error = null;
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.rejected](state, { payload }) {
      state.error = payload;
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
