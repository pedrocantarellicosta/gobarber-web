import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SingIn';
import SignUp from '../pages/SingUp';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signoup" component={SignUp} />

    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
