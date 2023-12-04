// db.js
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const dbPath = path.resolve(__dirname, 'your_database_file.db'); // Adjust the path accordingly
const db = new sqlite3.Database(dbPath);

// Specify the path to your SQLite database file
const dbPath = path.resolve(__dirname, 'server/your_database_file.db');
const db = new sqlite3.Database(dbPath);

// Create a table
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)');
});

module.exports = db;