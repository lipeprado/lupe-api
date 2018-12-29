// eslint-disable-next-line func-names
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('category')
    .del()
    .then(() => knex('category').insert([
      {
        id: '4e15886e-0afb-11e9-ab14-d663bd873d93',
        name: 'Rações',
      },
      {
        id: '4e158b20-0afb-11e9-ab14-d663bd873d93',
        name: 'Peixes',
      },
      {
        id: '4e158c74-0afb-11e9-ab14-d663bd873d93',
        name: 'Cachorros',
      },
      {
        id: '4e158db4-0afb-11e9-ab14-d663bd873d93',
        name: 'Gatos',
      },
    ]));
};
