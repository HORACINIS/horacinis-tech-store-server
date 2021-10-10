const Laptop = require('../../models/laptopModel');
const fs = require('fs');
const connectDB = require('./../../config/db');

connectDB();
const phonesList = JSON.parse(fs.readFileSync(`${__dirname}/laptopsList.json`, 'utf-8'));

const importData = async () => {
  try {
    await Laptop.create(phonesList);
    console.log('Laptop List data successfully imported!');
  } catch (err) {
    console.log('Laptop List data could not be imported!');
    console.log(err);
  }
  process.exit();
}

const deleteData = async () => {
  try {
    await Laptop.deleteMany();
    console.log('Laptop List Data successfully deleted!');
  } catch (err) {
    console.log('Laptop List Data could not deleted!');
    console.log(err);
  }
  process.exit();
}

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
