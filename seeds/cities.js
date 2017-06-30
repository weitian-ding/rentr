
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('city').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('city').insert({id: 1, name: 'Toronto', province: 'ON'}),
        knex('city').insert({id: 2, name: 'Waterloo', province: 'ON'})
      ]);
    });
};
