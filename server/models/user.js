var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    required: true,
    type: String,
    trim: 1,
    minglength: 1
  }
});

module.exports = { User };
