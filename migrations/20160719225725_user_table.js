exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('user', function(table) {
            table.increments().primary();
            table.string('username')
                .notNullable();
            table.string('password')
                .notNullable();
            table.string('first_name')
                .notNullable();
            table.string('last_name')
                .notNullable();
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('user')
    ])
};
