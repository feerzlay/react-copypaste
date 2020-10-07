import React from 'react';
import { IUsersShowUserProps } from './users-show-user.types';

export const UsersShowUser: React.FC<IUsersShowUserProps> = ({ userResource }) => {
  const user = userResource.read();

  return (
    <>
      <h1>{user.data.email}</h1>
      <dl>
        <dt>First Name</dt>
        <dd>{user.data.first_name}</dd>
        <dt>Last Name</dt>
        <dd>{user.data.last_name}</dd>
      </dl>
    </>
  );
};
