import { createActions, createReducer } from 'reduxsauce';

const INITIAL_STATE = {};

const setPaymentCycles = (state = INITIAL_STATE, { paymentCycles }) => ({
  ...state,
  paymentCycles
});

export const { Types, Creators: Actions } = createActions({
  setPaymentCycles: ['paymentCycles']
});

export default createReducer(INITIAL_STATE, {
  [Types.SET_PAYMENT_CYCLES]: setPaymentCycles
});
