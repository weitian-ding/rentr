// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'rentr',
      user: 'root',
      password: 'Alice123'
    }
  },

  ebs_dev:  {
  client: 'mysql',
    connection: {
      host: 'localhost',
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
