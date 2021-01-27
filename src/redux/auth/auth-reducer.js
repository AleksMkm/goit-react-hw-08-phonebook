import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { authOperations } from 'redux/auth';

const { createUser, loginUser, logoutUser, fetchCurrentUser } = authOperations;

const user = createReducer(
  { name: null, email: null },
  {
    [createUser.fulfilled]: (_, { payload }) => payload.user,
    [loginUser.fulfilled]: (_, { payload }) => payload.user,
    [logoutUser.fulfilled]: () => ({ name: null, email: null }),
    [fetchCurrentUser.fulfilled]: (_, { payload }) => payload,
  },
);

const token = createReducer(null, {
  [createUser.fulfilled]: (_, { payload }) => payload.token,
  [loginUser.fulfilled]: (_, { payload }) => payload.token,
  [logoutUser.fulfilled]: () => null,
});

const isLoggedIn = createReducer(false, {
  [createUser.fulfilled]: () => true,
  [loginUser.fulfilled]: () => true,
  [logoutUser.fulfilled]: () => false,
  [fetchCurrentUser.fulfilled]: () => true,
});

const error = createReducer(null, {
  [createUser.rejected]: (_, action) => action.payload,
  [createUser.pending]: () => null,
  [loginUser.rejected]: (_, action) => action.payload,
  [loginUser.pending]: () => null,
  [logoutUser.rejected]: (_, action) => action.payload,
  [logoutUser.pending]: () => null,
  [fetchCurrentUser.rejected]: (_, action) => action.payload,
  [fetchCurrentUser.pending]: () => null,
});

export const auth = combineReducers({ user, token, isLoggedIn, error });
