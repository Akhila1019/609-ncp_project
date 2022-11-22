const mongoose = require("mongoose")
var Schema = mongoose.Schema;


const customerSchema = new Schema({

  username: {
    type: String,
    unique: true
  },
  name: {
    type: String 
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
  }
});


  const Customerdb = mongoose.model('customers', customerSchema);

  module.exports = Customerdb;