import { createActions, createReducer } from 'reduxsauce';

const INITIAL_STATE = {};

const setUser = (state = INITIAL_STATE, { user }) => ({
  ...state,
  user
});

export const { Types, Creators: Actions } = createActions({
  setUser: ['user'],
  logout: []
});

export default createReducer(INITIAL_STATE, {
  [Types.SET_USER]: setUser
});
