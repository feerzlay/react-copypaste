import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { UsersList } from './pages/users-list';
import { UsersShow } from './pages/users-show';

export const Users: React.FC = () => {
  return (
    <Switch>
      <Route path="/users" exact component={UsersList} />
      <Route path="/users/:id" component={UsersShow} />
    </Switch>
  );
};
