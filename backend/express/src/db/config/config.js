require('dotenv').config();
module.exports = {
  development: {
    storage: `${process.env.PWD}/sqlite/database.sqlite`,
    dialect: 'sqlite',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    timezone: '+09:00',
    dialect: 'mysql',
    loggin: false,
  },
};
