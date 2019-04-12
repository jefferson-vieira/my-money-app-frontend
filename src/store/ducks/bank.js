import { createActions, createReducer } from 'reduxsauce';

const INITIAL_STATE = {};

const setSummary = (state = INITIAL_STATE, { summary }) => ({
  ...state,
  summary
});

const setBanks = (state = INITIAL_STATE, { banks }) => ({
  ...state,
  banks
});

export const { Types, Creators: Actions } = createActions({
  setSummary: ['summary'],
  setBanks: ['banks']
});

export default createReducer(INITIAL_STATE, {
  [Types.SET_SUMMARY]: setSummary,
  [Types.SET_BANKS]: setBanks
});
