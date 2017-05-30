// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'aa517ld4daxpe4.c69aue1yiq2j.us-west-2.rds.amazonaws.com',
      database: 'rentr',
      user: 'root',
      password: 'Alice123'
    }

  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'rentr',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
