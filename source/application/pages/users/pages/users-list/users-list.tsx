import React from 'react';
import { Link } from 'react-router-dom';
import { useResource } from 'react-use-resource';

import { useUsersService } from '~modules/features/users';

export const UsersList: React.FC = () => {
  const usersService = useUsersService();
  const usersResource = useResource('USERS', usersService.getAll, []);

  return (
    <>
      <h1>Users</h1>
      <ol>
        {usersResource.read().data.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.email}</Link>
          </li>
        ))}
      </ol>
    </>
  );
};
