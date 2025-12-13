const mysql = require('mysql2');
const { MYSQL_HOST, MYSQL_DB, MYSQL_PASSWORD, MYSQL_USER } = require('./config')

const db = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

module.exports = db;