import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: 'none',

        '&:hover, &:focus': {
          boxShadow: 'none'
        }
      }
    }
  }
});

export const ApplicationTheme: React.FC = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};
