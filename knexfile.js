require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: {
        database: 'postgress://localhost/providers',
        user: 'providerAPI',
        password: process.env.DEV_DB_PSWD  
    }
  },

  production: {
    client: 'pg',
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
