const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
var Schema = mongoose.Schema;


const feedbackSchema = new Schema({
  username: {
    type: String ,
    required: true,
    unique: true
  },
  email: {
    type: String ,
    required: true ,
    unique: true
  },
  feedback: {
    type: String ,
    required: true ,
    
  }
});


const Feedbackdb = mongoose.model('feedbacks', feedbackSchema);

module.exports = Feedbackdb;