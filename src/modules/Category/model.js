const Knex = require('../../dbs');
// eslint-disable-next-line import/order
const Bookshelf = require('bookshelf')(Knex);

Bookshelf.plugin('registry');
Bookshelf.plugin('visibility');
Bookshelf.plugin('bookshelf-uuid');

export default Bookshelf.Model.extend({
  tableName: 'category',
  uuid: true,
  hasTimestamps: true,
});
