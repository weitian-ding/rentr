var models = require('../models');

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        new models.User({ username: username })
            .fetch()
            .then(function (user) {
                if (!user)
                {
                    done(null, false);
                } else {
                    done(null, user);
                }
            })
            .catch(function (err) {
                done(err);
            });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    new models.User({id: id})
        .fetch()
        .then(function(user) {
            done(null, user);
        })
        .catch(function (err) {
            done(err);
        });
});

// custom middleware function for secured routes
passport.authMiddleware = function(req, res, next){
    if (!req.isAuthenticated())
        res.send(401);
    else
        next();
};

module.exports = passport;