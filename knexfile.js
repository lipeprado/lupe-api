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
};
