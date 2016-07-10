import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';

import routes from './routes';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const routingMiddleware = routerMiddleware(browserHistory);

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  }),
  applyMiddleware(thunk, routingMiddleware, logger)
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    {routes(history)}
  </Provider>,
  document.getElementById('app')
);

// TODO: add Sass
