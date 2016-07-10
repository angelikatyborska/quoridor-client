import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Layout from './AppContainer';
import App from './Lobby';
import Join from '../lobby/JoinContainer';

export default function routes(history) {
  return (
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Join} />
        <Route path="lobby" component={App} />
      </Route>
    </Router>
  );
}

