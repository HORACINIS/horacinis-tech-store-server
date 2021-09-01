const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const DB = process.env.PRODUCTS_DATABASE
  .replace('<USERNAME>', process.env.PRODUCTS_DATABASE_USERNAME)
  .replace('<PASSWORD>', process.env.PRODUCTS_DATABASE_PASSWORD);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Database connected successfully!'))
  .catch((err) => console.log(err));

const app = require('./app');


const port = 4000;
app.listen(process.env.PORT || port, () => {
  console.log(`Server listening on port ${process.env.PORT || port} - In ${process.env.NODE_ENV.toUpperCase()} mode!`);
});
