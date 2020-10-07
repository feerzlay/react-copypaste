import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import IMG_WEBDEV from './assets/webdev.svg';

export const Landing: React.FC = () => {
  const onClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (({} as any).fail());
  };

  return (
    <>
      <Box padding={2}>
        <Typography component="h1" variant="h4">
          react-copypaste
        </Typography>
        <img src={IMG_WEBDEV} height="100px" />
      </Box>
      <Box padding={2}>
        <Button variant="contained" color="primary" onClick={onClick}>
          Broken button for Sentry exception test
        </Button>
      </Box>
    </>
  );
};
