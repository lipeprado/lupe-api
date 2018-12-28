// Update with your config settings.
const dotenv = require('dotenv');

dotenv.config();
const config = require('config');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: config.get('development').DB_HOST,
      port: config.get('development').DB_PORT,
      user: config.get('development').DB_USER,
      database: config.get('development').DB_NAME,
      password: config.get('development').DB_PASS,
    },
    migrations: {
      tableName: 'migrations/',
    },
    seeds: {
      directory: `${__dirname}/seeds/`,
    },
    pool: {
      min: 1,
      max: 20,
    },
  },
  test: {
    client: 'pg',
    connection: {
      host: config.get(process.env.NODE_ENV).DB_HOST,
      port: config.get(process.env.NODE_ENV).DB_PORT,
      user: config.get(process.env.NODE_ENV).DB_USER,
      database: config.get(process.env.NODE_ENV).DB_NAME,
      password: config.get(process.env.NODE_ENV).DB_PASS,
    },
    migrations: {
      tableName: 'migrations/',
    },
    seeds: {
      directory: `${__dirname}/seeds/`,
    },
    pool: {
      min: 1,
      max: 20,
    },
  },
};
