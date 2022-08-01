import { RootState } from '../../store';

export const selectState = (state: RootState) => state;

export const selectLabels = (state: RootState) => {
  return state.labels;
}

export const selectLanguageId = (state: RootState) => {
  return state.global.languageId;
}

export const selectUserEmail = (state: RootState) => {
  return state.user?.email;
}

export const selectIsAuthenticated = (state: RootState) => {
  return !!state.user?.auth;
}

export const selectLoginError = (state: RootState) => {
  return state.user.loginError;
}