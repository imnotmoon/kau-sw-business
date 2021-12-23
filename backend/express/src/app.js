const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ success: false, message: err.message });
});

module.exports = app;
