var express = require('express');
const products = require('../apiServices/products/routes');

const router = express.Router();

router.use('/products', products);

module.exports = router;