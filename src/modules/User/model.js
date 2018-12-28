import bcrypt from 'bcrypt';

const Knex = require('../../dbs');
// eslint-disable-next-line import/order
const Bookshelf = require('bookshelf')(Knex);

Bookshelf.plugin('registry');
Bookshelf.plugin('visibility');
Bookshelf.plugin('bookshelf-uuid');

export default Bookshelf.Model.extend({
  tableName: 'users',
  uuid: true,
  bcrypt: { field: 'password' },
  hasTimestamps: true,
});

const encrypt = pass => bcrypt.hashSync(pass, 10);

const decrypt = (pass, hash) => bcrypt.compareSync(pass, hash);

export { encrypt, decrypt };
