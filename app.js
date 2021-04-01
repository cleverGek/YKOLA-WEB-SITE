var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var autreRouter = require('./routes/autres');

var app = express();

mongoose.connect('mongodb://xavi:0987654321@ykola-shard-00-00.jtzjg.mongodb.net:27017,ykola-shard-00-01.jtzjg.mongodb.net:27017,ykola-shard-00-02.jtzjg.mongodb.net:27017/ykola?ssl=true&replicaSet=atlas-cnjfji-shard-0&authSource=admin&retryWrites=true&w=majority',
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    usecreateIndex: true
})
.then(() => console.log('ok....'))
.catch((err) => console.log('ko...', err))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', autreRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
