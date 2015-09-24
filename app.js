var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var apis = require('./routes/api');

//d3.js
// var d3 = require("d3");
// var jsdom = require("jsdom");

// var documentd3 = jsdom.jsdom();
// var svg = d3.select(documentd3.body).append("svg");

//database
var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://localhost/navigate');
// var conn = mongoose.connect('mongodb://172.31.25.186/navigate');
//models
require('./models/websites_model.js');
require('./models/profiles_model.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/api', apis);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('common/layout/error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('common/layout/error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
