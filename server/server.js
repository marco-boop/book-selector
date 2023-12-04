// server.js
const path = require('path');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3001;
const dbPath = path.resolve(__dirname, 'your_database_file.db'); // Adjust the path accordingly
const db = new sqlite3.Database(dbPath);


app.use(express.json());

// Get all users
app.get('/users', (req, res) => {
    db.all('SELECT * FROM users', (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(rows);
        }
    });
});

// Add a new user
app.post('/users', (req, res) => {
    const { name } = req.body;
    db.run('INSERT INTO users (name) VALUES (?)', [name], function (err) {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json({ id: this.lastID, name });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
