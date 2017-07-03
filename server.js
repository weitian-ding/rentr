var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


// services
var passport = require('./services/passport');

// routers
var users = require('./routes/users');
var properties = require('./routes/properties');

// start configuration

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({secret: 'keyboard cat'}));
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'client/bower_components/material-design-icons')));
app.use(passport.initialize());
app.use(passport.session());

// end configuration

// photos router TODO use S3
app.use(express.static(path.join(__dirname, 'storage')));

// start mounting routers
app.use('/users', users);
// app.use('/api', passport.authMiddleware);  // authentication
app.use('/api/properties', properties);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
// TODO remvoe this
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        console.log(err);
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err); // TODO deal with error more gracefully
});

// end mounting routers

module.exports = app;
