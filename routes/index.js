var express = require('express');
const products = require('../apiServices/products/routes');

const router = express.Router();

router.use('/onlinestore', products);

module.exports = router;