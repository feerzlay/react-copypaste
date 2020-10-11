import React from 'react';

import { useParams } from 'react-router-dom';
import { useResource } from 'react-use-resource';

import { useUsersService } from '~modules/features/users';

import { UsersShowErrorBoundary } from './components/users-show-error-boundary';
import { UsersShowUser } from './components/users-show-user';

export const UsersShow: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const usersService = useUsersService();
  const userResource = useResource('USER', usersService.getOne, [+id]);

  return (
    <UsersShowErrorBoundary key={id}>
      <UsersShowUser userResource={userResource} />
    </UsersShowErrorBoundary>
  );
};
