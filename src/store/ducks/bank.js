import { createActions, createReducer } from 'reduxsauce';

const INITIAL_STATE = {};

const setBanks = (state = INITIAL_STATE, { banks }) => ({
  ...state,
  banks
});

export const { Types, Creators: Actions } = createActions({
  setBanks: ['banks']
});

export default createReducer(INITIAL_STATE, {
  [Types.SET_BANKS]: setBanks
});
