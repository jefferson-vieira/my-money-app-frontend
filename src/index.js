import 'index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import 'configs';

import { Provider } from 'react-redux';
import store from 'store/ducks';

import App from 'App';

import * as serviceWorker from 'serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
