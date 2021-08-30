const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
const Phone = require('../../models/phoneModel');
const fs = require('fs');

const DB = process.env.DATABASE
  .replace('<USERNAME>', process.env.DATABASE_USERNAME)
  .replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Database connected successfully!'))
  .catch((err) => console.log(err));

const phonesList = JSON.parse(fs.readFileSync(`${__dirname}/phonesList.json`, 'utf-8'));

const importData = async () => {
  try {
    await Phone.create(phonesList);
    console.log('Phone List data successfully imported!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
}

const deleteData = async () => {
  try {
    await Phone.deleteMany();
    console.log('Phone List Data successfully deleted!');
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
