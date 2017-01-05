
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
          knex('user').insert({username: 'test@test.ca', password: 'test', first_name: 'allen', last_name: 'ding'}),
          knex('user').insert({username: 'test1@test.ca', password: 'test', first_name: 'allen1', last_name: 'ding1'}),
          knex('user').insert({username: 'test2@test.ca', password: 'test', first_name: 'allen2', last_name: 'ding2'})
      ]);
    });
};
