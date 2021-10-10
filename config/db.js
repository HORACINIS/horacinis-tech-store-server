require('dotenv').config({ path: './config.env' });
const mongoose = require('mongoose');

const DB = process.env.PRODUCTS_DATABASE
  .replace('<USERNAME>', process.env.PRODUCTS_DATABASE_USERNAME)
  .replace('<PASSWORD>', process.env.PRODUCTS_DATABASE_PASSWORD);

const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Database connected successfully!')
  } catch (err) {
    console.log('Could not connect to the database!');
    console.log(err);
    process.exit(1);
  }
}

module.exports = connectDB;;
