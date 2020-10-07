import React from 'react';
import { Link } from 'react-router-dom';

export const ApplicationNavigation: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/users">Users</Link>
    </nav>
  );
};
