const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = require('bluebird');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, "Username must be 5 characters or more"]
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be 8 characters or more."]
  },
  createAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
