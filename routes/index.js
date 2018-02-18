const express = require('express');
const router = express.Router();

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
  res.render('index', { title: 'See articles' });
});

// Auth system
router.post('/login', controllers.login);
router.post('/register', controllers.register);
router.get('/logout', controllers.logout);

module.exports = router;
