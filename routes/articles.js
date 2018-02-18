const express = require('express');
const router = express.Router();

const helpers = require('../helpers');
const handleError = helpers.handleError;

const Article = require('../mongoose/models/article');

const ensureLoggedIn = require('../passport/auth');

router.all('/', ensureLoggedIn);
router.all('/*', ensureLoggedIn);

router.get('/', function(req, res, next) {
  Article.find({}, function(err, articles) {
    res.render('articles', { articles });
  });
});

router.get('/:id', function(req, res, next) {
  Article.find({ id: req.params.id }, function(err, articles) {
    if (!articles.length) {
      return handleError('Article Not Found', next);
    }
    res.render('article', { articles });
  });
});

router.post('/', function(req, res, next) {
  const article = new Article({
    id: req.body.id,
    source: req.body.source,
    author: req.body.author,
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    urlToImage: req.body.urlToImage,
    publishedAt: Date.now(),
  });
  article.save(function(err, raw) {
    if (err) handleError('Article Not Saved', next);
    res.send('Article was added');
  });
});

router.post('/:id', function(req, res, next) {
  if (req.body._method === 'put') {
    Article.update(
      { id: req.params.id },
      { title: req.body.title, description: req.body.description },
      function(err, raw) {
        if (err) handleError('Article Not Updated', next);
        res.send('Article was updated');
      },
    );
  } else if (req.body._method === 'delete') {
    Article.find({ id: req.params.id }).remove(function(err, raw) {
      if (err) return handleError('Article Not Deleted', next);
      res.send('Article was deleted');
    });
  }
});

// router.delete('/:id', function(req, res, next) {
//   res.send('Deletes the article');
// });

module.exports = router;
