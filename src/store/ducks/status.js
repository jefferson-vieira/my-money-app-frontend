import { createActions, createReducer } from 'reduxsauce';

const INITIAL_STATE = {
  loading: false,
  error: false,
  redirect: '/me/dashboard',
  mobile: window.screen.width < 576,
  isAuthenticated: false
};

const setError = (state = INITIAL_STATE, { status }) => ({
  ...state,
  error: status
});

const setLoading = (state = INITIAL_STATE, { status }) => ({
  ...state,
  loading: status
});

const setRedirect = (state = INITIAL_STATE, { path }) => ({
  ...state,
  redirect: path
});

export const { Types, Creators: Actions } = createActions({
  setError: ['status'],
  setLoading: ['status'],
  setRedirect: ['path']
});

export default createReducer(INITIAL_STATE, {
  [Types.SET_ERROR]: setError,
  [Types.SET_LOADING]: setLoading,
  [Types.SET_REDIRECT]: setRedirect
});
