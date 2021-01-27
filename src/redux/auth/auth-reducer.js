import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { authOperations } from 'redux/auth';

const { createUser, loginUser, logoutUser } = authOperations;

const user = createReducer(
  { name: null, email: null },
  {
    [createUser.fulfilled]: (_, { payload }) => payload.user,
    [loginUser.fulfilled]: (_, { payload }) => payload.user,
    [logoutUser.fulfilled]: () => ({ name: null, email: null }),
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
});

const error = createReducer(null, {
  [createUser.rejected]: (_, action) => action.payload,
  [createUser.pending]: () => null,
  [loginUser.rejected]: (_, action) => action.payload,
  [loginUser.pending]: () => null,
  [logoutUser.rejected]: (_, action) => action.payload,
  [logoutUser.pending]: () => null,
});

export const auth = combineReducers({ user, token, isLoggedIn, error });
