var express = require('express');
var passport = require('../services/passport');
var router = express.Router();

// route to log in
router.post('/',
    passport.authenticate('local'),
    function (req, res) {
        res.send(req.user);
    }
);

// route to log out TODO change url
router.post('/logout', function(req, res){
    req.logOut();
    res.send(200);
});

module.exports = router;

