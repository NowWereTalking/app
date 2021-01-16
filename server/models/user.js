const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  profImg: {
    data: Buffer,
    contentType: String,
  },

  Name: {
    type: String,
    trim: true,
    // required: 'Name is Required',
  },

  bio: {
    type: String,
    trim: true,
  },

  location: {
    type: String,
    trim: true,
  },

  twitter: {
    type: String,
    trim: true,
  },

  facebook: {
    type: String,
    trim: true,
  },

  polFav: {
    type: String,
    trim: true,
  },

  polpref: {
    type: String,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
