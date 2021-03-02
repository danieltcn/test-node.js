// // Update with your config settings.


const knex = {
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '156985327x',
    database : 'shoptest'
  },
  migrations: {
    directory: `${ __dirname }/db/migrations`
  },
  // seeds: {
  //   directory: `${ __dirname }/db/seeds`
  // }
};

module.exports = knex;
