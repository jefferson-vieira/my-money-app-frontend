import 'index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import './configs';

import { Provider } from 'react-redux';
import store from './store';

import App from './App';

import * as serviceWorker from './serviceWorker';



import { show } from 'routes/routes';
show();



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
