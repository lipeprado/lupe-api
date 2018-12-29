/* eslint-disable func-names */
exports.up = knex => knex.schema.createTable('expense', (table) => {
  table
    .uuid('id')
    .notNullable()
    .unique()
    .primary();
  table.string('title', 50).notNullable();
  table.text('description');
  table.datetime('due', 6).defaultTo(knex.fn.now(6));
  table.bigInteger('value').notNullable();
  table.integer('fixed').defaultTo(1);
  table.enum('status', ['paid', 'pending']).defaultTo(['pending']);
  table.enum('type', ['bank_check', 'bill']).defaultTo(['bill']);
  table
    .uuid('user_id')
    .unsigned()
    .notNullable();
  table
    .uuid('category_id')
    .unsigned()
    .notNullable();
  table
    .foreign('user_id')
    .references('id')
    .inTable('user');
  table
    .foreign('category_id')
    .references('id')
    .inTable('category');
  table
    .timestamp('created_at')
    .defaultTo(knex.fn.now(6))
    .notNullable();
  table
    .timestamp('updated_at')
    .defaultTo(knex.fn.now(6))
    .notNullable();
  table.comment('All Expenses stored here');
});

exports.down = knex => knex.schema.dropTable('expense');
