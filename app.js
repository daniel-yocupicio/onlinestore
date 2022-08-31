var express = require('express');
require('dotenv').config();
const {error404Handler, errorHandler} = require('./middleware');

var app = express();
app.use(errorHandler);
app.use(error404Handler);

module.exports = app;
