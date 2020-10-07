import React from 'react';
import * as Sentry from '@sentry/react';

export const captureException = (error: Error, errorInfo: React.ErrorInfo) => {
  if (process.env.SENTRY_DSN) {
    Sentry.captureException(error, {
      contexts: { react: { componentStack: errorInfo.componentStack } }
    });
  }
};
