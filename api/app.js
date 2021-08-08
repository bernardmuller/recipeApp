const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const env = require('dotenv').config()

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const mealsRouter = require('./routes/meals');
const menusRouter = require('./routes/menus');
const notionRouter = require('./routes/notion');

const notion = require('./routes/notion')

const app = express();

const mongoose = require('mongoose');

const dbUrl = process.env.DBURL || 'mongodb://localhost:27017/menuApp';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', () => {
    console.log('Database Connected...')
});


// view engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/meals', mealsRouter);
app.use('/menus', menusRouter);
app.use('/notion', notionRouter);

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


const port = process.env.PORT || 8080;
// listener //
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})