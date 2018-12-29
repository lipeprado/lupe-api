// eslint-disable-next-line func-names
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('expense')
    .del()
    .then(() => knex('expense').insert([
      {
        id: '88871f14-0af9-11e9-ab14-d663bd873d93',
        title: 'Boleto Quatree',
        description: 'Empresa Dogmania',
        value: 30,
        user_id: '8c25ef22-e85f-11e8-9f32-f2801f1b9fd1',
        category_id: '4e158db4-0afb-11e9-ab14-d663bd873d93',
      },
      {
        id: '888721da-0af9-11e9-ab14-d444bd873d93',
        title: 'Cheque Peixes',
        description: 'Empresa Peixonauta',
        value: 170,
        type: 'bank_check',
        status: 'paid',
        user_id: '8c25ef22-e85f-11e8-9f32-f2801f1b9fd1',
        category_id: '4e15886e-0afb-11e9-ab14-d663bd873d93',
      },
      {
        id: '88871f14-0af9-11e9-ac15-d663bd873d93',
        title: 'Boleto Quatree',
        description: 'Empresa Dogmania',
        value: 220,
        user_id: '8c25ef22-e85f-11e8-9f32-f2801f1b9fd1',
        category_id: '4e158b20-0afb-11e9-ab14-d663bd873d93',
      },
      {
        id: '888721da-0af9-11e9-ab14-d663bd873d93',
        title: 'Cheque Alpiste',
        description: 'Empresa Alpiste',
        value: 20,
        user_id: '8c25ef22-e85f-11e8-9f32-f2801f1b9fd1',
        category_id: '4e158c74-0afb-11e9-ab14-d663bd873d93',
      },
    ]));
};
