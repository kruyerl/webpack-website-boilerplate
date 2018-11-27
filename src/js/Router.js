import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import UnderConstruction from './components/UnderConstruction';
import App from './views/App';
import NotFound from './views/NotFound';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default AppRouter;
