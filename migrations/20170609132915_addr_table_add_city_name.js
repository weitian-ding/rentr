
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('city', function (table) {
            table.increments().primary();
            table.string('name')
                .notNullable();
            table.string('province')
                .notNullable();
        }),

        knex.schema.table('address', function (table) {
            table.integer('city_id')
                .unsigned().notNullable()
                .references('id')
                .inTable('city');
        })
    ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([

      knex.schema.table('address', function(table) {
          table.dropForeign('city_id');
          table.dropColumn('city_id');
      })
          .dropTable('city')
  ]);
};
