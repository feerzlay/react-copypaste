import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthorizationSignin } from './pages/authorization-signin';

export const Authorization: React.FC = () => {
  return (
    <Switch>
      <Route path="/authorization/signin" component={AuthorizationSignin} />
      <Redirect to="/authorization/signin" />
    </Switch>
  );
};
