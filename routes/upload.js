/**
 * Created by Allen on 2017-05-25.
 */

// dummy upload controller

var express = require('express');
var router = express.Router();
var multer = require('../services/multer');
var path = require('path');


// route to test if the user is logged in or not
router.post('/', multer.array('photos', 12), function (req, res) {
    console.log(req);

});


module.exports = router;

