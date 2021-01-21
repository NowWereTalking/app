// Import npm packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cookieSession = require('cookie-session');

const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user");
// const local = require("passport-local");
// const db = require("./src/Pages/Landing.js");

const app = express();
const PORT = process.env.PORT || 3001; // Step 1

// const routes = require('./routes/api');


app.use(cookieParser());
app.use(bodyParser.json());
app.use(cookieSession({
  name: 'session',
  keys: [/* secret keys */],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use(passport.initialize());

app.use(passport.session());
require("../config/passport")(passport, User, LocalStrategy)

// Step 2
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/newUsersDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

//schema
// const NewUserSchema = new Schema({
//     username: String,
//     password: String,
//     date: {
//         type: String,
//         default: Date.now()

//     }
// });

// This commented out code is data that i manuel stored in our mongodb. I need to make sure i can get data from the user and not from me
//model
// const NewUser = mongoose.model('NewUser', NewUserSchema);

// //saving our data
// const data = {
//     username:"jamjorge21",
//     password:" Bru39025no!"
// }

// const NnewUser = new NewUser(data);

// NnewUser.save((error)=>{
//     if (error) {
//         console.log("oops something happend")
//     } else {
//         console.log("Data has been saved!")
//     }
// }) ;

// const Userschema = mongoose.model('login',NewUserSchema)


app.post("/api", (request, response) => {
  console.log(request.body);
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));

// module.export = Userschema;
