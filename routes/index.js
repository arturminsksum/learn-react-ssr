const express = require('express');
const router = express.Router();

import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';

import articlesApp from '../app/reducers';
import App from '../app/App';
import template from '../app/template';
import routes from '../app/routes';

const logger = require('../logger');
import { fullUrl } from '../helpers';

router.use(function(req, res, next) {
  logger.info(fullUrl(req));
  next();
});

router.get('/*', function(req, res, next) {
  // Create a new Redux store instance
  const store = createStore(articlesApp);

  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({ route, match }) => {
    const { getData } = route.component;

    if (!(getData instanceof Function)) {
      return Promise.resolve(null);
    }

    return getData(store.dispatch, match);
  });

  return Promise.all(promises).then(() => {
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

    console.log('isAuthenticated', req.isAuthenticated());

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();
    preloadedState.logged = req.isAuthenticated();

    return res.send(template(html, preloadedState));
  });

  // const context = {};
  // const html = renderToString(
  //   <Provider store={store}>
  //     <StaticRouter location={req.url} context={context}>
  //       <App />
  //     </StaticRouter>
  //   </Provider>,
  // );

  // if (context.url) {
  //   // Somewhere a `<Redirect>` was rendered
  //   return res.redirect(context.url);
  // }

  // console.log('isAuthenticated', req.isAuthenticated());

  // // Grab the initial state from our Redux store
  // const preloadedState = store.getState();
  // preloadedState.logged = req.isAuthenticated();

  // res.send(template(html, preloadedState));
});

module.exports = router;
