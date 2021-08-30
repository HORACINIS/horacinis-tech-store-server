const express = require('express');
const morgan = require('morgan');
const phonesRouter = require('./routes/products/phonesRoutes');

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/products/phones', phonesRouter);


module.exports = app;