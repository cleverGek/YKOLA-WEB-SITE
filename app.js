var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var autreRouter = require('./routes/autres');
var contactRouter =  require('./routes/contact');
var urlRouter = require('./routes/url');
var admResRouter = require('./routes/admRessources');
var admTendances = require('./routes/admTendances');
var admPromandats = require('./routes/admPromandats');

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
app.use('/contact', contactRouter);
app.use('/url', urlRouter);
app.use('/ressources', ressourcesRouter);

/** admn */
app.use('/admin', admResRouter);
app.use('/admin', admPromandats);
app.use('admin', admTendances);

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
