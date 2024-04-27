const mongoose = require("mongoose")
//inside of admin, need to do registration => insertion
//outside of website => registration

//
const userschema = new mongoose.Schema({
    //fullname:String => means fullname variable is of type string
    fullname: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    contact: {
        type: String,
        required: true,
        unique:true
      },
  });


  //mongoose.model contains 2 paramaters => collection name,schema 
const user = mongoose.model('user', userschema);

module.exports = user;