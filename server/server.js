const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const User = require('./models/user.js');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/profileDB', { useNewUrlParser: true });

app.use(express.static(path.join(__dirname, '../build')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.get('/test', (req, res) => {
  console.log('REQUEST WAS PROXIED');
  res.json({ done: true });
});

app.post('/submit', ({ body }, res) => {
//   console.log('submit', req);
//   res.send('test');
  User.create(body)
    .then((dbUser) => {
      res.json(dbUser);
      console.log('user,', dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log('running on port', PORT);
});
