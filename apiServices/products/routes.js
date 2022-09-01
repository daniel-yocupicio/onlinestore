const express = require('express');
const controller = require('./controller');

const routes = express.Router();

routes.get('/getproductsbycategory/:id/:offset/:limit', controller.getProductsByCategory);

module.exports = routes;