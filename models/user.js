const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.hash(this.password, 10, (err, hashedPassword) => {
    if (err) return next(err);

    this.password = hashedPassword;
    next();
  });
});

userSchema.methods.comparePassword = function (password) {
  if (password) {
    return bcrypt.compare(password, this.password);
  }

  return false;
};

module.exports = mongoose.model('User', userSchema);
