
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.table('address', function(table) {
          table.string('unit')
              .nullable();
      }),
      knex.schema.table('property', function(table) {
          table.text('short_desc')
              .notNullable();
          table.text('desc')
              .nullable();
      })
  ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.table('property', function(table) {
            table.dropColumn('desc');
            table.dropColumn('short_desc');
        }),
        knex.schema.table('address', function(table) {
            table.dropColumn('unit');
        })
    ]);
};
