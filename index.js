// index.js
const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


//middleware
const checkAuth = (req, res, next) => {
    const isAuthenticated = true; 
    console.log("sini");
    if (isAuthenticated) {
      next(); 
    } else {
      res.status(403).send('Forbidden');
    }
  };
  
app.get('/users', checkAuth, (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.error('Error fetching users:', err);
        res.status(500).send('Server error');
        return;
      }
      res.json(results);
    });
  });


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
