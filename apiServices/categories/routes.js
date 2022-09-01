const express = require('express');
const controller = require('./controller');

const routes = express.Router();

routes.get('/getcategories', controller.getCategories);

module.exports = routes;