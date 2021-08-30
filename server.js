const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE
  .replace('<USERNAME>', process.env.DATABASE_USERNAME)
  .replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Database connected successfully!'))
  .catch((err) => console.log(err));

const app = require('./app');


const port = 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port} - In ${process.env.NODE_ENV.toUpperCase()} mode!`);
});