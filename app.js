var express = require('express');
require('dotenv').config();
const {error404Handler, errorHandler} = require('./middleware');
const routes = require('./routes')

var app = express();
app.use(errorHandler);
app.use(error404Handler);
app.use('/onlinestore', routes);

module.exports = app;
