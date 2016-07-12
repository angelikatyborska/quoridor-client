import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Layout from './AppContainer';
import App from './Lobby';

export default function routes(history) {
  return (
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={App} />
      </Route>
    </Router>
  );
}

