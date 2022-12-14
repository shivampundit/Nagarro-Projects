require('dotenv').config();
const harperive = require('harperive');

const DB_CONFIG = {
  harperHost: process.env.DB_URL,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  schema: process.env.DB_SCHEMA // optional
};

const Client = harperive.Client;
const db = new Client(DB_CONFIG);

module.exports = db;