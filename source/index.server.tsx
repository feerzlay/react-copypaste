process.env.SSR = '1';

require('dotenv').config();

const fetch = require('node-fetch');
const AbortController = require('abort-controller');

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

if (!globalThis.AbortController) {
  globalThis.AbortController = AbortController;
}

import fs from 'fs';
import path from 'path';

import express from 'express';
import compression from 'compression';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { StaticRouter } from 'react-router-dom';
import { ResourcesBoundary } from 'react-use-resource';
import { Helmet, HelmetData } from 'react-helmet';
import { ServerStyleSheets } from '@material-ui/core/styles';

// eslint-disable-next-line
const SSRPrepass = require('react-ssr-prepass');

import { Application } from './application';

const PORT = process.env.PORT || 8080;

fs.readFile(path.resolve(__dirname, '../client/index.html'), 'utf8', (error, index) => {
  if (error) {
    return;
  }

  const app = express();

  app.use(compression());

  app.get('*', async (request, response, next) => {
    if (request.xhr) {
      return next();
    }

    const extname = path.extname(request.path);
    if (extname !== '') {
      return next();
    }

    const accept = request.accepts('html', 'json', 'xml');
    if (accept !== 'html') {
      return next();
    }

    const context: { url?: string } = {};
    const cache = {};
    const sheets = new ServerStyleSheets();

    const application = (
      <StaticRouter location={request.url} context={context}>
        <ResourcesBoundary cache={cache}>
          <Application />
        </ResourcesBoundary>
      </StaticRouter>
    );

    try {
      await SSRPrepass(application);
    } catch (error) {}

    let html = '';
    let helmet: HelmetData;

    try {
      html = ReactDOMServer.renderToString(sheets.collect(application));
      helmet = Helmet.renderStatic();
    } catch (error) {
      // TODO: Catch errors in error boundaries.
      response.status(200);
      return response.send(index);
    }

    if (context.url) {
      return response.redirect(301, context.url);
    }

    response.status(200);
    response.send(
      index
        .replace('<div id="container"></div>', `<div id="container">${html}</div>`)
        .replace('<script id="cache"></script>', `<script>window.__CACHE__ = ${JSON.stringify(cache)}</script>`)
        .replace('<script id="jss-server-side"></script>', `<style id="jss-server-side">${sheets.toString()}</style>`)
        .replace('<title>RCP</title>', `${helmet.title.toString()}`)
    );
  });

  app.use(express.static(path.resolve(__dirname, '../client')));

  app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
  });
});
