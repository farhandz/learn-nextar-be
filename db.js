
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root', // Replace with your database username
  password: '', // Replace with your database password
  database: 'jobnesia' // Replace with your database name
});

// Open the MySQL connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id', connection.threadId);
});

module.exports = connection;
