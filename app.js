var express = require('express');
require('dotenv').config();
const {error404Handler, errorHandler} = require('./middleware');
const routes = require('./routes')
const db = require('./services/sequelize');

async function sql () {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/onlinestore', routes);
sql();
app.use(errorHandler);
app.use(error404Handler);

module.exports = app;
