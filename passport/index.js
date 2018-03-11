const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../mongoose/models/user');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        return err
          ? done(err)
          : user
            ? password === user.password
              ? done(null, user)
              : done(null, false, { error: 'Incorrect password.' })
            : done(null, false, { error: 'Incorrect username.' });
      });
    },
  ),
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    err ? done(err) : done(null, user);
  });
});

module.exports = passport;
