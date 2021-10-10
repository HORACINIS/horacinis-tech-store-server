const connectDB = require('./config/db');

connectDB();
const app = require('./app');


const port = 4000;
app.listen(process.env.PORT || port, () => {
  console.log(`Server listening on port ${process.env.PORT || port} - In ${process.env.NODE_ENV.toUpperCase()} mode!`);
});
