const pgPromise = require('pg-promise');
const pgInstance = pgPromise();

const config = {
  host: "localhost",
  port: 5432,
  database: "express_users",
  user: 'mohrahalateeq', // your username here!!
  password: '200100'
}

const connection = pgInstance(config);

module.exports = connection;