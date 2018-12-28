const enviroment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[enviroment];
// eslint-disable-next-line import/order
const knex = require('knex')(config);

module.exports = knex;
