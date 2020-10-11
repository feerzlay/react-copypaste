import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { ResourcesBoundary } from 'react-use-resource';

import * as Sentry from '@sentry/react';

import { Application } from './application';

const container = document.getElementById('container');

if (process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN
  });
}

if (container) {
  if (container.hasChildNodes()) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cache = (window as any).__CACHE__;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (window as any).__CACHE__;

    ReactDOM.hydrate(
      <BrowserRouter>
        <ResourcesBoundary cache={cache}>
          <Application />
        </ResourcesBoundary>
      </BrowserRouter>,
      container
    );
  } else {
    ReactDOM.render(
      <BrowserRouter>
        <ResourcesBoundary>
          <Application />
        </ResourcesBoundary>
      </BrowserRouter>,
      container
    );
  }
}
