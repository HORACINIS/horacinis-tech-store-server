const Phone = require('../../models/phoneModel');
const fs = require('fs');
const connectDB = require('./../../config/db');

connectDB();
const phonesList = JSON.parse(fs.readFileSync(`${__dirname}/phonesList.json`, 'utf-8'));

const importData = async () => {
  try {
    await Phone.create(phonesList);
    console.log('Phone List data successfully imported!');
  } catch (err) {
    console.log('Phone List data could not be imported!');
    console.log(err);
  }
  process.exit();
}

const deleteData = async () => {
  try {
    await Phone.deleteMany();
    console.log('Phone List Data successfully deleted!');
  } catch (err) {
    console.log('Phone List Data could not be deleted!');
    console.log(err);
  }
  process.exit();
}

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
