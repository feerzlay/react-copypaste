import React from 'react';
import { Link } from 'react-router-dom';
import { useResource } from 'react-use-resource';

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import { useUsersService } from '~modules/features/users';

export const UsersList: React.FC = () => {
  const usersService = useUsersService();
  const usersResource = useResource('USERS', usersService.getAll, []);

  return (
    <>
      <Box padding={2}>
        <Typography component="h1" variant="h4">
          Users
        </Typography>
      </Box>
      <List>
        {usersResource.read().data.map((user) => (
          <ListItem key={user.id} component={Link} to={`/users/${user.id}`} button>
            <ListItemText primary={user.email} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
