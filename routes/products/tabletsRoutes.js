const express = require('express');
const { getTablets, getTabletsById } = require('./../../controllers/products/tabletsController');

const router = express.Router();

router
  .route('/')
  .get(getTablets)

router
  .route('/:_id')
  .get(getTabletsById)

module.exports = router;