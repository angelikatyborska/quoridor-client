import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducers/index';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
);

// TODO: add ESLint

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
