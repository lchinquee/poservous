const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'tracker'
    },
    console.log('Connected to the tracker database.')
);

module.exports = db;