const express = require('express');
const { getPhones } = require('./../../controllers/products/phonesController');

const router = express.Router();

router
  .route('/')
  .get(getPhones)


module.exports = router;