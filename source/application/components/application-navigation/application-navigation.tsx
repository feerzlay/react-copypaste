import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

export const ApplicationNavigation: React.FC = () => {
  return (
    <AppBar position="static" elevation={1}>
      <Toolbar variant="dense">
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/users" color="inherit">
          Users
        </Button>
      </Toolbar>
    </AppBar>
  );
};
