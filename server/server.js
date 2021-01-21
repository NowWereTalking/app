const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const User = require('./models/user.js');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/profileDB', { useNewUrlParser: true });

app.use(express.static(path.join(__dirname, '../build')));

app.get('/test', (req, res) => {
  console.log('REQUEST WAS PROXIED');
  User.find({}, (err, docs) => {
    if (!err) {
      console.log(docs);
    } else {
      throw err;
    }
  }).then((data) => {
    res.json(data);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.post('/submit', (req, res) => {
//   console.log('submit', req);
//   res.send('test');
  console.log(req.body);
  return res.json({});
  User.create(req.body)
    .then((dbUser) => {
      res.json(dbUser);
      //   console.log('user,', dbUser);
    })
    .catch((err) => {
      res.json(err);
    });

  res.json(req.body);
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log('running on port', PORT);
});
