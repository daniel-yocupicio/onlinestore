var express = require('express');
require('dotenv').config();
const {error404Handler, errorHandler} = require('./middleware');
const routes = require('./routes')
const db = require('./services/sequelize');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/onlinestore', routes);
app.use(errorHandler);
app.use(error404Handler);

module.exports = app;
