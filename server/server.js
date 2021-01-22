const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const logger = require('morgan')

const app = express();
const PORT = process.env.PORT || 3001;
const User = require('./models/user.js');
const cors = require('cors')

const passport = require("passport")
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')

const LocalStrategy = require("passport-local").Strategy

const apiRouter = require('./routes/apiRoutes')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/profileDB', { useNewUrlParser: true });


app.use(cors({
  "allowedHeaders" : ["sessionId", "Content-Type"], 
  "exposedHeaders" : ["sessionId"], 
  "credentials" : true, 
  "origin" : ["http://localhost:3000", "http://localhost:3001"]
}))

app.use(express.static(path.join(__dirname, '../build')));
app.use(logger('dev'))
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended : true }))
app.use(cookieSession({
  name: "session",
  keys: ['secret tunnels'],
  maxAge: 1000 * 60 * 60 * 24 // one day 
}));
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport, LocalStrategy)

app.use("/api", apiRouter)
app.get('/test', (req, res) => {
  res.redirect('/error')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});



app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log('running on port', PORT);
});
