export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;

export const getUserError = state => state.auth.error;

export const getUserModal = state => state.auth.isModalOpened;

export const getIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
