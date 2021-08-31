const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
const Laptop = require('../../models/laptopModel');
const fs = require('fs');

const DB = process.env.PRODUCTS_DATABASE
  .replace('<USERNAME>', process.env.PRODUCTS_DATABASE_USERNAME)
  .replace('<PASSWORD>', process.env.PRODUCTS_DATABASE_PASSWORD);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Database connected successfully!'))
  .catch((err) => console.log(err));

const phonesList = JSON.parse(fs.readFileSync(`${__dirname}/laptopsList.json`, 'utf-8'));

const importData = async () => {
  try {
    await Laptop.create(phonesList);
    console.log('Laptop List data successfully imported!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
}

const deleteData = async () => {
  try {
    await Laptop.deleteMany();
    console.log('Laptop List Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
}

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}