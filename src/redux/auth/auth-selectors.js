export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;

export const getUserError = state => state.auth.error;

export const getUserModal = state => state.auth.isModalOpened;

export const getModalType = state => state.auth.modalType;

export const getIsVerified = state => state.auth.isVerified;

export const getUserCreatedCode = state => state.auth.isUserCreated;

export const getIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
