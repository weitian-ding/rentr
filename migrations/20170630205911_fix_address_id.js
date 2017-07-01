
exports.up = function(knex, Promise) {
  return knex.schema.table('address', function(table) {
      table.integer('property_id')
          .unsigned()
          .notNullable()
          .references('id').inTable('property')
  })
      .table('property', function(table) {
          table.dropForeign('address_id')
              .dropColumn('address_id')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('property', function(table) {
        table.integer('address_id')
            .unsigned()
            .notNullable()
            .references('id').inTable('address');
    })
        .table('address', function(table) {
            table.dropForeign('property_id')
                .dropColumn('property_id');
        })
};
