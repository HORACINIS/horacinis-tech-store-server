const express = require('express');
const { getLaptops, getLaptopsById } = require('./../../controllers/products/laptopsController');

const router = express.Router();

router
  .route('/')
  .get(getLaptops)

router
  .route('/:_id')
  .get(getLaptopsById)

module.exports = router;