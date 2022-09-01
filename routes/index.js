var express = require('express');
const products = require('../apiServices/products/routes');
const category = require('../apiServices/categories/routes');

const router = express.Router();

router.use('/product', products);
router.use('/category', category);

module.exports = router;