const express = require('express');
const router = express.Router();

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../app/components/App';
import template from '../app/template';

const Article = require('../mongoose/models/article');
const controllers = require('../passport/controllers');

const logger = require('../logger');
const helpers = require('../helpers');
const fullUrl = helpers.fullUrl;

router.use(function(req, res, next) {
  logger.info(fullUrl(req));
  next();
});

router.get('/', function(req, res, next) {
  const appString = renderToString(<App />);
  // res.render('index', {
  //   body: appString,
  //   title: 'See articles',
  // });
  res.send(
    template({
      body: appString,
      title: 'See articles',
    }),
  );
});

// Auth system
router.post('/login', controllers.login);
router.post('/register', controllers.register);
router.get('/logout', controllers.logout);

module.exports = router;
