const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
var Schema = mongoose.Schema;


const contactSchema = new Schema({
  username: {
    type: String ,
    required: true,
    unique: true
  },
  email: {
    type: String ,
    required: true ,
    unique: true
  }
});


const FContactdb = mongoose.model('contacts', contactSchema);

module.exports = Contactdb;