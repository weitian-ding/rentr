
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('property_type').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('property_type').insert({id: 1, name: 'house'}),
        knex('property_type').insert({id: 2, name: 'apartment'})
      ]);
    });
};
