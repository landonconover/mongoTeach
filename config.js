//This is where all the config vars are mapped and managed and pulled in. This gives a single source of truth for the config.

const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  endpoint: process.env.API_URL,
  masterKey: process.env.API_KEY,
  port: process.env.PORT,
  mongoUser: process.env.MONGO_USER,
  mongoPass: process.env.MONGO_PASS,
};