/* eslint-disable func-names */
exports.up = knex => knex.schema.createTable('category', (table) => {
  table
    .uuid('id')
    .notNullable()
    .unique()
    .primary();
  table.string('name', 150).notNullable();
  table
    .timestamp('created_at')
    .defaultTo(knex.fn.now())
    .notNullable();
  table
    .timestamp('updated_at')
    .defaultTo(knex.fn.now())
    .notNullable();
  table.comment('All categories stored here');
});

exports.down = knex => knex.schema.dropTable('category');
