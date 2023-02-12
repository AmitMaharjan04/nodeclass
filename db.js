// get the client

require('dotenv').config();
(process.env.MYSQL_DB_USER)

const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'userinfo'
});

// simple query
connection.query(
  'SELECT * FROM user',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
  }
);

// with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );