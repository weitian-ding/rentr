var express = require('express');
var passport = require('../services/passport');
var router = express.Router();

// route to log in
router.post('/login',
    passport.authenticate('local'),
    function (req, res) {
        res.send(req.user);
    }
);

// route to log out TODO change url
router.post('/logout', function (req, res) {
    req.logOut();
    res.send(200);
});

// route to test if the user is logged in or not
router.get('/loggedin', function (req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
});


module.exports = router;

