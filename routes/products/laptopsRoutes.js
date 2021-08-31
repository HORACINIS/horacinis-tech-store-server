const express = require('express');
const { getLaptops } = require('./../../controllers/products/laptopsController');

const router = express.Router();

router
  .route('/')
  .get(getLaptops)

module.exports = router;