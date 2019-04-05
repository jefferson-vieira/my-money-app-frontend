import { combineReducers, createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import statusReducer from './status';
import userReducer from './user';
import bankReducer from './bank';

const middlewares = [promise, thunk];

const reducer = combineReducers({
  form: formReducer,
  toastr: toastrReducer,
  status: statusReducer,
  user: userReducer,
  bank: bankReducer
});

const rootReducer = (state, action) => {
  if (action.type.includes('SIGNOUT')) {
    state = undefined;
  }

  return reducer(state, action);
};

const reduxDevTools =
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(...middlewares)(createStore)(
  rootReducer,
  reduxDevTools
);

export default store;
