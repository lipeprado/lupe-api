/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table
      .uuid('id')
      .notNullable()
      .unique()
      .primary();
    table.string('password', 150).notNullable();
    table
      .string('email', 100)
      .unique()
      .notNullable();
    table.string('firstName', 50).notNullable();
    table.string('lastName', 50);
    table.string('avatarUrl').defaultTo('http://i.pravatar.cc/150?img=3');
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
