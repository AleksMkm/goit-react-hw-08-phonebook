import { createSlice } from '@reduxjs/toolkit';
import { authOperations, authActions } from 'redux/auth';

const {
  createUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
  verifyUser,
} = authOperations;
const {
  toggleModal,
  nullifyError,
  setModalType,
  nullifyCreationCode,
} = authActions;

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isFetchingCurrentUser: false,
  isModalOpened: false,
  modalType: null,
  isUserCreated: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [nullifyError](state) {
      state.error = null;
    },
    [nullifyCreationCode](state) {
      state.isUserCreated = null;
    },
    [toggleModal](state, { payload }) {
      state.isModalOpened = payload;
    },
    [setModalType](state, { payload }) {
      state.modalType = payload;
    },
    [createUser.fulfilled](state, { payload }) {
      state.user = payload.data.user;
      state.isUserCreated = payload.code;
    },
    [createUser.pending](state) {
      state.error = null;
    },
    [createUser.rejected](state, { payload }) {
      state.error = payload;
    },
    [verifyUser.fulfilled](state, { payload }) {
      state.user = payload.data.user;
    },
    [verifyUser.pending](state) {
      state.error = null;
    },
    [verifyUser.rejected](state, { payload }) {
      state.error = payload;
    },
    [loginUser.fulfilled](state, { payload }) {
      state.user = payload.data.user;
      state.token = payload.data.token;
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
      state.user = payload.data.user;
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
