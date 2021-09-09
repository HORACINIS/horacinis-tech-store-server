const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const phonesRouter = require('./routes/products/phonesRoutes');
const laptopsRouter = require('./routes/products/laptopsRoutes');
const tabletsRouter = require('./routes/products/tabletsRoutes');

const app = express();


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());

app.use('/api/v1/products/phones', phonesRouter);
app.use('/api/v1/products/laptops', laptopsRouter);
app.use('/api/v1/products/tablets', tabletsRouter);

module.exports = app;