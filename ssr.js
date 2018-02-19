/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(3);
var Schema = mongoose.Schema;

var articlesSchema = new Schema({
  id: String,
  source: String,
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: Date
});

var Article = mongoose.model('Article', articlesSchema);

module.exports = Article;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(19);

var uri = 'mongodb://artur:artur-31@ds121088.mlab.com:21088/frontcamp';
mongoose.connect(uri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log('connection success');
});

module.exports = mongoose;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(23);

var fullUrl = function fullUrl(req) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  });
};

var handleError = function handleError(text, next) {
  var err = new Error(text);
  err.status = 404;
  next(err);
};

exports.fullUrl = fullUrl;
exports.handleError = handleError;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(1);
var bodyParser = __webpack_require__(7);
var cookieParser = __webpack_require__(8);
var session = __webpack_require__(9);

var passport = __webpack_require__(10);

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: 'SECRET',
  resave: true,
  saveUninitialized: true
}));

// Passport:
app.use(passport.initialize());
app.use(passport.session());

var index = __webpack_require__(13);
var articles = __webpack_require__(24);

app.set('view engine', 'pug');

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use('/', index);
app.use('/articles', articles);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var passport = __webpack_require__(11);
var LocalStrategy = __webpack_require__(12).Strategy;

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function (username, password, done) {
  User.findOne({ username: username }, function (err, user) {
    return err ? done(err) : user ? password === user.password ? done(null, user) : done(null, false, { message: 'Incorrect password.' }) : done(null, false, { message: 'Incorrect username.' });
  });
}));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    err ? done(err) : done(null, user);
  });
});

module.exports = passport;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(14);

var _App = __webpack_require__(15);

var _App2 = _interopRequireDefault(_App);

var _template = __webpack_require__(18);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(1);
var router = express.Router();

var Article = __webpack_require__(2);
var controllers = __webpack_require__(20);

var logger = __webpack_require__(22);
var helpers = __webpack_require__(5);
var fullUrl = helpers.fullUrl;

router.use(function (req, res, next) {
  logger.info(fullUrl(req));
  next();
});

router.get('/', function (req, res, next) {
  var appString = (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));
  res.render('index', {
    body: appString,
    title: 'See articles'
  });
  // res.send(
  //   template({
  //     body: appString,
  //     title: 'See articles',
  //   }),
  // );
});

// Auth system
router.post('/login', controllers.login);
router.post('/register', controllers.register);
router.get('/logout', controllers.logout);

module.exports = router;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(16);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(17);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_header2.default, null),
        'Hello world!!',
        _react2.default.createElement(_footer2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      "nav",
      { className: "navbar", role: "navigation", "aria-label": "main navigation" },
      _react2.default.createElement(
        "div",
        { className: "navbar-brand" },
        _react2.default.createElement(
          "a",
          { className: "navbar-item title", href: "/" },
          "ArchiNews"
        )
      )
    ),
    _react2.default.createElement(
      "section",
      { className: "hero is-primary" },
      _react2.default.createElement(
        "div",
        { className: "hero-body" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "h1",
            { className: "title" },
            "Choose your channel"
          ),
          _react2.default.createElement(
            "h2",
            { className: "subtitle" },
            "All sources with English news"
          )
        )
      )
    )
  );
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      "footer",
      { className: "footer" },
      _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "div",
          { className: "content has-text-centered" },
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement(
              "strong",
              null,
              "ArchiNews"
            ),
            " by",
            _react2.default.createElement(
              "a",
              { href: "" },
              "Artur Minsk"
            ),
            ". The source code is licensed",
            _react2.default.createElement(
              "a",
              { href: "http://opensource.org/licenses/mit-license.php" },
              "MIT"
            ),
            ". The website content is provided by",
            _react2.default.createElement(
              "a",
              { href: "https://newsapi.org/" },
              "News API"
            ),
            "."
          )
        )
      )
    )
  );
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var body = _ref.body,
      title = _ref.title;

  return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>" + title + "</title>\n      </head>\n\n      <body>\n        <div id=\"root\">" + body + "</div>\n      </body>\n    </html>\n  ";
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var User = __webpack_require__(21);

// Здесь мы проверяем, передаем данные о пользователе в функцию верификации, котоую мы определили выше.
// Вообще, passport.authenticate() вызывает метод req.logIn автоматически, здесь же я указал это явно. Это добавляет удобство в отладке. Например, можно вставить сюда console.log(), чтобы посмотреть, что происходит...
// При удачной авторизации данные пользователя будут храниться в req.user
module.exports.login = function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    return err ? next(err) : user ? req.logIn(user, function (err) {
      return err ? next(err) : res.redirect('/articles');
    }) : res.redirect('/');
  })(req, res, next);
};

// Здесь все просто =)
module.exports.logout = function (req, res) {
  req.logout();
  res.redirect('/');
};

// Регистрация пользователя. Создаем его в базе данных, и тут же, после сохранения, вызываем метод `req.logIn`, авторизуя пользователя
module.exports.register = function (req, res, next) {
  var user = new User({
    username: req.body.email,
    password: req.body.password
  });
  user.save(function (err) {
    return err ? next(err) : req.logIn(user, function (err) {
      return err ? next(err) : res.redirect('/articles');
    });
  });
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(3);
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
mongoose.model('user', UserSchema);

var User = mongoose.model('user', UserSchema);

module.exports = User;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var winston = __webpack_require__(4);

var _require = __webpack_require__(4),
    createLogger = _require.createLogger,
    format = _require.format,
    transports = _require.transports;

var combine = format.combine,
    timestamp = format.timestamp,
    printf = format.printf;


var myFormat = printf(function (info) {
  return info.message + ' : ' + info.timestamp;
});

var logger = createLogger({
  format: combine(timestamp(), myFormat),
  transports: [new winston.transports.File({ filename: './logger/logger.log' })]
});

module.exports = logger;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(1);
var router = express.Router();

var helpers = __webpack_require__(5);
var handleError = helpers.handleError;

var Article = __webpack_require__(2);

var ensureLoggedIn = __webpack_require__(25);

router.all('/', ensureLoggedIn);
router.all('/*', ensureLoggedIn);

router.get('/', function (req, res, next) {
  Article.find({}, function (err, articles) {
    res.render('articles', { articles: articles });
  });
});

router.get('/:id', function (req, res, next) {
  Article.find({ id: req.params.id }, function (err, articles) {
    if (!articles.length) {
      return handleError('Article Not Found', next);
    }
    res.render('article', { articles: articles });
  });
});

router.post('/', function (req, res, next) {
  var article = new Article({
    id: req.body.id,
    source: req.body.source,
    author: req.body.author,
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    urlToImage: req.body.urlToImage,
    publishedAt: Date.now()
  });
  article.save(function (err, raw) {
    if (err) handleError('Article Not Saved', next);
    res.send('Article was added');
  });
});

router.post('/:id', function (req, res, next) {
  if (req.body._method === 'put') {
    Article.update({ id: req.params.id }, { title: req.body.title, description: req.body.description }, function (err, raw) {
      if (err) handleError('Article Not Updated', next);
      res.send('Article was updated');
    });
  } else if (req.body._method === 'delete') {
    Article.find({ id: req.params.id }).remove(function (err, raw) {
      if (err) return handleError('Article Not Deleted', next);
      res.send('Article was deleted');
    });
  }
});

// router.delete('/:id', function(req, res, next) {
//   res.send('Deletes the article');
// });

module.exports = router;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ensureLoggedIn = function ensureLoggedIn(req, res, next) {
  return req.isAuthenticated() ? next() : res.redirect('/');
};

module.exports = ensureLoggedIn;

/***/ })
/******/ ]);