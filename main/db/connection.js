const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'rootroot',
      database: 'employees_db'
    },
    console.log(`Connected to the Employee database.`)
  );

module.exports = connection;