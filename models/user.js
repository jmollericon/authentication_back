const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 20,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 20,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 4
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin']
  }
});

module.exports = mongoose.model('User', userSchema);
