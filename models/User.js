const mongoose = require('mongoose');

/* A Schema holds the different fields each resource needs to have. */
const UserSchema = new mongoose.Schema({
  name: {
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
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now /* The ".now" method gives current date & time. */
  }
});

module.exports = User = mongoose.model('user', UserSchema); 
/* ".model" takes in two parameters: the model name & Schema. */