'use strict';

const express = require('express');

const app = express();

let db = [];

app.use('/api/v1', (req, res) => {
  res.status(200).send('Its OK??');
});

// When does this middleware run?
// What does it do?
app.use(express.json());

// When does this middleware run?
app.use((req, res, next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

// Route to Get All Categories
app.get('/categories', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
});

// Route to Get One Category
app.get('/categories/:id', (req, res, next) => {
  let index = req.path.split('/')[3];
  let result = db[index];
  res.json({result});
});
// Route to Create a Category
app.post('/categories', (req, res, next) => {
  let body = req.body;
  db.push(body);
  res.send(db[db.length - 1]);
});
// Route to Delete a Category
app.delete('/categories', (req, res, next) => {
  let index = req.path.split('/')[3];
  res.send(db.splice(index, 1));
});
// Route to Update a Category
app.put('/categories/:id', (req, res, next) => {
  let index = req.path.split('/')[3];
  res.send(db[index] = req.body);
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

app.get('*', (req, res, next) => {
  res.status(404).send('What just happened');
});

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

