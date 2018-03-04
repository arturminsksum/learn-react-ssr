const express = require('express');
const router = express.Router();

import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import articlesApp from '../app/reducers';
import App from '../app/App';
import template from '../app/template';

const logger = require('../logger');
import { fullUrl } from '../helpers';

router.use(function(req, res, next) {
  logger.info(fullUrl(req));
  next();
});

router.get('/*', function(req, res, next) {
  // Create a new Redux store instance
  const store = createStore(articlesApp);
  const context = {};

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>,
  );

  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    return res.redirect(context.url);
  }

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  res.send(template(html, preloadedState));
});

module.exports = router;
