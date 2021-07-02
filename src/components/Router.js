import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={Quote} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
