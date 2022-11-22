const mongoose = require("mongoose")
var Schema = mongoose.Schema;


const companySchema = new Schema({

  username: {
    type: String,
    unique: true
  },
  name: {
    type: String 
  },
  info: {
    type: String,
  },
  address: {
    type: String
  },
  occupation: {
    type: String
  },
  noOfWorkers: {
    type: String
  },
  salary: {
    type: Number
  }
});


  const Companydb = mongoose.model('companies', companySchema);

  module.exports = Companydb;