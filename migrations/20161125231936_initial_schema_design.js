
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('address', function (table) {
          table.increments().primary();
          table.decimal('lat')
              .notNullable();
          table.decimal('lng')
              .notNullable();
      }),

      knex.schema.createTable('property_type', function (table) {
          table.increments().primary();
          table.string('name')
              .notNullable();
      }),

      knex.schema.createTable('property', function(table) {
          table.increments().primary();
          table.dateTime('create_datetime')
              .notNullable();
          table.dateTime('expiry_datetime')
              .notNullable();
          table.date('availability_start_date');
          table.date('availability_end_date');
          table.integer('address_id')
              .unsigned().notNullable()
              .references('id')
              .inTable('address');
          table.integer('property_type_id')
              .unsigned().notNullable()
              .references('id')
              .inTable('property_type');
          table.integer('owner')
              .unsigned().notNullable()
              .references('id')
              .inTable('user');
      }),

      knex.schema.createTable('room_type', function(table) {
          table.increments().primary();
          table.string('name')
              .notNullable();
      }),

      knex.schema.createTable('room', function(table) {
          table.increments().primary();
          table.integer('accommodates')
              .notNullable().unsigned();
          table.decimal("rent")
              .notNullable();
          table.integer('room_type_id')
              .unsigned().notNullable()
              .references('id')
              .inTable('room_type');
          table.integer('property_id')
              .unsigned().notNullable()
              .references('id')
              .inTable('property');
      }),

      knex.schema.createTable('bed_type', function(table) {
          table.increments().primary();
          table.string('name')
              .notNullable();
      }),

      knex.schema.createTable('bed', function(table) {
          table.increments().primary();
          table.integer('bed_type_id')
              .unsigned().notNullable()
              .references('id')
              .inTable('bed_type');
          table.integer('room_id')
              .unsigned().notNullable()
              .references('id')
              .inTable('room')
      }),

      knex.schema.createTable('gender', function(table) {
          table.increments().primary();
          table.string('name')
              .notNullable();
      }),

      knex.schema.createTable('roommate', function(table) {
          table.increments().primary();
          table.integer('gender_id')
              .unsigned().notNullable()
              .references('id')
              .inTable('gender');
          table.integer('property_id')
              .unsigned().notNullable()
              .references('id')
              .inTable('property');
      }),

      knex.schema.createTable('facility', function(table) {
          table.increments().primary();
          table.string('name')
              .notNullable();
      }),

      knex.schema.createTable('room_facility', function(table) {
          table.increments().primary();
          table.integer('room_id')
              .unsigned().notNullable()
              .references('id')
              .inTable('room');
          table.integer('facility_id')
              .unsigned().notNullable()
              .references('id')
              .inTable('facility');
      }),

      knex.schema.createTable('amenity', function(table) {
          table.increments().primary();
          table.string('name')
              .notNullable();
      }),

      knex.schema.createTable('property_amenity', function(table) {
          table.increments().primary();
          table.integer('property_id')
              .unsigned().notNullable()
              .references('id')
              .inTable('property');
          table.integer('amenity_id')
              .unsigned().notNullable()
              .references('id')
              .inTable('amenity')
      })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('property_amenity'),
        knex.schema.dropTable('amenity'),
        knex.schema.dropTable('room_facility'),
        knex.schema.dropTable('facility'),
        knex.schema.dropTable('roommate'),
        knex.schema.dropTable('gender'),
        knex.schema.dropTable('bed'),
        knex.schema.dropTable('bed_type'),
        knex.schema.dropTable('room'),
        knex.schema.dropTable('room_type'),
        knex.schema.dropTable('property'),
        knex.schema.dropTable('property_type'),
        knex.schema.dropTable('address')
    ]);
  
};
