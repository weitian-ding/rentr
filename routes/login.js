var express = require('express');
var passport = require('../services/passport');
var router = express.Router();

router.post('/',
    passport.authenticate('local', {
            successRedirect: '/dashboard',
            failureRedirect: '/login',
            failureFlash: false })
);

module.exports = router;

