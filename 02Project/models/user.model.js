const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: String
  },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);  // Fixed parentheses

module.exports = User