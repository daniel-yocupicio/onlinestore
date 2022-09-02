const express = require('express');
const controller = require('./controller');

const routes = express.Router();

routes.get('/getproductsbycategory/:id/:offset/:limit', controller.getProductsByCategory);
routes.get('/getproducts/:offset/:limit', controller.getProducts);
routes.get('/search/:search/:offset/:limit', controller.searchProduct);

module.exports = routes;