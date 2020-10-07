import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';

import { Application } from './application';

const container = document.getElementById('container');

if (process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN
  });
}

if (container) {
  ReactDOM.render(<Application />, container);
}
