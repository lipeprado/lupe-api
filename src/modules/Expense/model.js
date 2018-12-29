// ModelsCategory.1
import User from '../User/model';
import Category from '../Category/model';

const Knex = require('../../dbs');
// eslint-disable-next-line import/order
const Bookshelf = require('bookshelf')(Knex);

Bookshelf.plugin('registry');
Bookshelf.plugin('visibility');
Bookshelf.plugin('bookshelf-uuid');

export default Bookshelf.Model.extend({
  tableName: 'expense',
  uuid: true,
  hasTimestamps: true,
  user: () => this.hasOne(User),
  categories: () => this.hasMany(Category),
});
