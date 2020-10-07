import React from 'react';
import { IUsersShowUserProps } from './users-show-user.types';

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

export const UsersShowUser: React.FC<IUsersShowUserProps> = ({ userResource }) => {
  const user = userResource.read();

  return (
    <>
      <Box padding={2}>
        <Typography component="h1" variant="h4">
          {user.data.email}
        </Typography>
      </Box>
      <List>
        <ListItem>
          <ListItemText primary="First Name" secondary={user.data.first_name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Last Name" secondary={user.data.last_name} />
        </ListItem>
      </List>
    </>
  );
};
