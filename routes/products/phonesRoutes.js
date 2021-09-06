const express = require('express');
const { getPhones, getPhonesById } = require('./../../controllers/products/phonesController');

const router = express.Router();

router
  .route('/')
  .get(getPhones)

router
.route('/:_id')
.get(getPhonesById)

module.exports = router;