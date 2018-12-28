// eslint-disable-next-line func-names
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => knex('users').insert([
      {
        id: '8c25ef22-e85f-11e8-9f32-f2801f1b9fd1',
        firstName: 'Elon',
        lastName: 'Musk',
        email: 'elon@spacex.com',
        password: 'senhaSecreta',
        avatarUrl: 'http://i.pravatar.cc/150?u=fake@pravatar.com',
      },
    ]));
};
