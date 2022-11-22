const mongoose = require("mongoose")
var Schema = mongoose.Schema;


const workerSchema = new Schema({

  username: {
    type: String,
    unique: true
  },
  name: {
    type: String ,
    required: true,
    unique: true
  },
  age: {
    type: Number ,
  },
  address: {
    type: String
  },
  gender: {
    type: String
  },
  phoneno: {
    type: String
  },
  occupation: {
    type: String
  },
  experience: {
    type: Number
  },
  salary: {
    type: Number
  },
  type: {
    type: String
  }
});


  const Workerdb = mongoose.model('workers', workerSchema);

  module.exports = Workerdb;