const User = require('../mongoose/models/user');
const passport = require('../passport');

module.exports.login = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    return err
      ? next(err)
      : user
        ? req.logIn(user, function(err) {
            return err ? next(err) : res.send(user);
          })
        : res.send({ error: 'Login failed' });
  })(req, res, next);
};

module.exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

module.exports.register = function(req, res, next) {
  var user = new User({
    username: req.body.email,
    password: req.body.password,
  });
  user.save(function(err) {
    return err
      ? next(err)
      : req.logIn(user, function(err) {
          return err ? next(err) : res.redirect('/add');
        });
  });
};
