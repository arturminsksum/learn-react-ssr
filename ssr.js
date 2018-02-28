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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var passport = __webpack_require__(17);
var LocalStrategy = __webpack_require__(18).Strategy;
var User = __webpack_require__(4);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(5);
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = [{"id":"the-verge","source":"The Verge","author":"Thuy Ong","title":"Facebook begins privacy push ahead of tough new European law","description":"Facebook’s new privacy center tool is a response the upcoming General Data Protection Regulation which will be introduced in May","url":"https://www.theverge.com/2018/1/29/16944304/facebook-privacy-eu-law-general-data-protection-regulation","publishedAt":"2018-01-29T12:10:18Z"},{"id":"the-next-web","source":"The Next Web","author":"Mix","title":"We got a cryptocurrency mystery box – but you probably shouldn't","description":"Earlier in January we wrote about a quirky new trend: cryptocurrency mystery boxes you can order online to get a random selection of digital coins.\r\n\r\nCBlocks – the company we spoke ...","url":"https://thenextweb.com/hardfork/2018/01/29/cryptocurrency-mystery-box-review/","publishedAt":"2018-01-29T11:49:06Z"},{"id":"abc-news","source":"ABC News","author":"ABC","title":"Rousey's WWE deal gets ex-UFC star back in bright spotlight","description":"Ronda Rousey stayed silent as she pointed from the ring toward the WrestleMania logo that hung in the rafters. Without saying a word, the MMA great made clear she was signaling her wrestling debut at WWE's signature event. Rousey wants her WrestleMania moment…","url":"http://abcnews.go.com/Entertainment/wireStory/rouseys-wwe-deal-ufc-star-back-bright-spotlight-52691202","publishedAt":"2018-01-29T22:01:09Z"}]

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var addPost = exports.addPost = function addPost(post) {
  return {
    type: 'ADD_POST',
    post: post
  };
};

var setSortArticles = exports.setSortArticles = function setSortArticles(sort) {
  return {
    type: 'SET_SORT_ARTICLES',
    sort: sort
  };
};

var SortArticles = exports.SortArticles = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_THE_VERGE: 'SHOW_THE_VERGE',
  SHOW_THE_NEXT_WEB: 'SHOW_THE_NEXT_WEB',
  SHOW_ABC_NEWS: 'SHOW_ABC_NEWS'
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    "article",
    { className: "media box" },
    _react2.default.createElement(
      "div",
      { className: "media-content" },
      _react2.default.createElement(
        "div",
        { className: "content" },
        _react2.default.createElement(
          "a",
          { className: "title", href: props.item.url },
          props.item.title
        ),
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            "span",
            null,
            props.item.description
          )
        ),
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            "strong",
            null,
            "Source: ",
            props.item.source,
            " "
          ),
          _react2.default.createElement(
            "small",
            null,
            "Author: ",
            props.item.author,
            " "
          ),
          _react2.default.createElement(
            "small",
            null,
            "Time: ",
            props.item.publishedAt
          )
        )
      )
    )
  );
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(5);
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
/* 11 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(37);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(1);
var bodyParser = __webpack_require__(14);
var cookieParser = __webpack_require__(15);
var session = __webpack_require__(16);

var passport = __webpack_require__(3);

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

var index = __webpack_require__(20);
var articles = __webpack_require__(38);

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
/* 14 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(21);

var _redux = __webpack_require__(6);

var _reactRedux = __webpack_require__(2);

var _reducers = __webpack_require__(22);

var _reducers2 = _interopRequireDefault(_reducers);

var _App = __webpack_require__(25);

var _App2 = _interopRequireDefault(_App);

var _template = __webpack_require__(34);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(1);
var router = express.Router();

var Article = __webpack_require__(10);
var controllers = __webpack_require__(35);

var logger = __webpack_require__(36);
var helpers = __webpack_require__(12);
var fullUrl = helpers.fullUrl;

router.use(function (req, res, next) {
  logger.info(fullUrl(req));
  next();
});

router.get('/', function (req, res, next) {
  // Create a new Redux store instance
  var store = (0, _redux.createStore)(_reducers2.default);

  var html = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_App2.default, null)
  ));

  // Grab the initial state from our Redux store
  var preloadedState = store.getState();

  res.send((0, _template2.default)(html, preloadedState));

  // res.render('index', {
  //   title: 'See articles',
  //   body: html,
  //   preloadedState,
  // });
});

// Auth system
router.post('/login', controllers.login);
router.post('/register', controllers.register);
router.get('/logout', controllers.logout);

module.exports = router;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _articles = __webpack_require__(23);

var _articles2 = _interopRequireDefault(_articles);

var _sortArticles = __webpack_require__(24);

var _sortArticles2 = _interopRequireDefault(_sortArticles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var articlesApp = (0, _redux.combineReducers)({
  articles: _articles2.default,
  sortArticles: _sortArticles2.default
});
exports.default = articlesApp;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _state = __webpack_require__(7);

var _state2 = _interopRequireDefault(_state);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var articles = function articles() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state2.default;
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_POST':
      return [].concat(_toConsumableArray(state), [{
        id: action.post.id,
        source: action.post.source,
        author: action.post.author,
        title: action.post.title,
        description: action.post.description,
        url: action.post.url
      }]);
    default:
      return state;
  }
};
exports.default = articles;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sortArticles = function sortArticles() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SHOW_ALL';
  var action = arguments[1];

  switch (action.type) {
    case 'SET_SORT_ARTICLES':
      return action.sort;
    default:
      return state;
  }
};
exports.default = sortArticles;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(26);

var _header2 = _interopRequireDefault(_header);

var _sort = __webpack_require__(40);

var _sort2 = _interopRequireDefault(_sort);

var _footer = __webpack_require__(31);

var _footer2 = _interopRequireDefault(_footer);

var _visibleArticles = __webpack_require__(32);

var _visibleArticles2 = _interopRequireDefault(_visibleArticles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_header2.default, null),
    _react2.default.createElement(_sort2.default, null),
    _react2.default.createElement(_visibleArticles2.default, null),
    _react2.default.createElement(_footer2.default, null)
  );
};

exports.default = App;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _sortLink = __webpack_require__(27);

var _sortLink2 = _interopRequireDefault(_sortLink);

var _actions = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'nav',
      { className: 'navbar', role: 'navigation', 'aria-label': 'main navigation' },
      _react2.default.createElement(
        'div',
        { className: 'navbar-brand' },
        _react2.default.createElement(
          'a',
          { className: 'navbar-item title', href: '/' },
          'ArchiNews'
        )
      )
    ),
    _react2.default.createElement(
      'section',
      { className: 'hero is-primary' },
      _react2.default.createElement(
        'div',
        { className: 'hero-body' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'h1',
            { className: 'title' },
            'Choose your channel'
          ),
          _react2.default.createElement(
            'h2',
            { className: 'subtitle' },
            'All sources with English news'
          )
        )
      )
    )
  );
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(8);

var _link = __webpack_require__(28);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.sort === state.sortArticles
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: function onClick() {
      dispatch((0, _actions.setSortArticles)(ownProps.sort));
    }
  };
};
var SortLink = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_link2.default);
exports.default = SortLink;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var active = _ref.active,
      children = _ref.children,
      _onClick = _ref.onClick;

  if (active) {
    return _react2.default.createElement(
      "li",
      { className: "is-active" },
      _react2.default.createElement(
        "a",
        { href: "javascript:void(0)" },
        children
      )
    );
  }
  return _react2.default.createElement(
    "li",
    null,
    _react2.default.createElement(
      "a",
      {
        href: "",
        onClick: function onClick(e) {
          e.preventDefault();
          _onClick();
        }
      },
      children
    )
  );
};

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */
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
  );
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(2);

var _articles = __webpack_require__(33);

var _articles2 = _interopRequireDefault(_articles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getVisibleArticles = function getVisibleArticles(articles, sort) {
  switch (sort) {
    case 'SHOW_ALL':
      return articles;
    case 'SHOW_THE_VERGE':
      return articles.filter(function (post) {
        return post.id === 'the-verge';
      });
    case 'SHOW_THE_NEXT_WEB':
      return articles.filter(function (post) {
        return post.id === 'the-next-web';
      });
    case 'SHOW_ABC_NEWS':
      return articles.filter(function (post) {
        return post.id === 'abc-news';
      });
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    articles: getVisibleArticles(state.articles, state.sortArticles)
  };
};

var VisibleArticles = (0, _reactRedux.connect)(mapStateToProps, null)(_articles2.default);

exports.default = VisibleArticles;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _post = __webpack_require__(9);

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var articles = _ref.articles;
  return _react2.default.createElement(
    'section',
    { className: 'container' },
    articles.map(function (post, index) {
      return _react2.default.createElement(_post2.default, { item: post, key: index });
    }),
    _react2.default.createElement('br', null)
  );
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (html, preloadedState) {
  return '\n      <!doctype html>\n      <html>\n        <head>\n          <meta charset=utf-8>\n          <title>ArchiNews</title>\n          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css">\n        </head>\n        <body>\n          <div id="root">' + html + '</div>\n          <script>\n            window.PRELOADED_STATE = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n          </script>\n          <script src="bundle.js"></script>\n        </body>\n      </html>\n  ';
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var User = __webpack_require__(4);
var passport = __webpack_require__(3);
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var winston = __webpack_require__(11);

var _require = __webpack_require__(11),
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
/* 37 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(1);
var router = express.Router();

var helpers = __webpack_require__(12);
var handleError = helpers.handleError;

var Article = __webpack_require__(10);

var ensureLoggedIn = __webpack_require__(39);

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ensureLoggedIn = function ensureLoggedIn(req, res, next) {
  return req.isAuthenticated() ? next() : res.redirect('/');
};

module.exports = ensureLoggedIn;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _sortLink = __webpack_require__(27);

var _sortLink2 = _interopRequireDefault(_sortLink);

var _actions = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(
      'div',
      { className: 'tabs is-centered' },
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          _sortLink2.default,
          { sort: _actions.SortArticles.SHOW_ALL },
          'SHOW_ALL'
        ),
        _react2.default.createElement(
          _sortLink2.default,
          { sort: _actions.SortArticles.SHOW_THE_VERGE },
          'THE_VERGE'
        ),
        _react2.default.createElement(
          _sortLink2.default,
          { sort: _actions.SortArticles.SHOW_THE_NEXT_WEB },
          'THE_NEXT_WEB'
        ),
        _react2.default.createElement(
          _sortLink2.default,
          { sort: _actions.SortArticles.SHOW_ABC_NEWS },
          'ABC_NEWS'
        )
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement('br', null),
      _react2.default.createElement('br', null)
    )
  );
};

/***/ })
/******/ ]);