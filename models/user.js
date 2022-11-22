const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
var Schema = mongoose.Schema;


const userSchema = new Schema({
  username: {
    type: String ,
    required: true,
    unique: true
  },
  password: {
    type: String ,
    required: true ,
    unique: true
  }
});


const Userdb = mongoose.model('users', userSchema);

module.exports = Userdb;