import React, { useEffect } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  props: {
    MuiTextField: {
      variant: 'outlined'
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: 'none',

        '&:hover, &:focus': {
          boxShadow: 'none'
        }
      }
    },
    MuiTextField: {
      root: {
        width: '100%'
      }
    }
  }
});

export const ApplicationTheme: React.FC = ({ children }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};
