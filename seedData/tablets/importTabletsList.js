const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
const Tablet = require('../../models/tabletModel');
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

const tabletsList = JSON.parse(fs.readFileSync(`${__dirname}/tabletsList.json`, 'utf-8'));

const importData = async () => {
  try {
    await Tablet.create(tabletsList);
    console.log('Tablet List data successfully imported!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
}

const deleteData = async () => {
  try {
    await Tablet.deleteMany();
    console.log('Tablet List Data successfully deleted!');
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
