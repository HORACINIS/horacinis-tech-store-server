const Tablet = require('../../models/tabletModel');
const fs = require('fs');
const connectDB = require('./../../config/db');

connectDB();
const tabletsList = JSON.parse(fs.readFileSync(`${__dirname}/tabletsList.json`, 'utf-8'));

const importData = async () => {
  try {
    await Tablet.create(tabletsList);
    console.log('Tablet List data successfully imported!');
  } catch (err) {
    console.log('Tablet List data could not be imported!');
    console.log(err);
  }
  process.exit();
}

const deleteData = async () => {
  try {
    await Tablet.deleteMany();
    console.log('Tablet List Data successfully deleted!');
  } catch (err) {
    console.log('Tablet List Data could not be deleted!');
    console.log(err);
  }
  process.exit();
}

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
