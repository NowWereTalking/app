const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');



const UserSchema = new Schema({
  profImg: {
    data: Buffer,
    contentType: String,
  },
  name: {
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

  email : {
    type  : String, 
    required : true 
  },
  password: {
      type:String,
      trim:true
  }
});
UserSchema.methods.verifyPassword = function verifyPassword(password){
   return bcrypt.compareSync(password,this.password) 
} 



const User = mongoose.model('User', UserSchema);
module.exports = User;