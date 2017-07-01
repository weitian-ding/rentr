
exports.up = function(knex, Promise) {
    return knex.schema.createTable('photo', function(table) {
        table.increments().primary();
        table.string('url')
            .notNullable();
        table.integer('property_id')
            .unsigned()
            .notNullable()
            .references('id').inTable('property');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('photo');
};
