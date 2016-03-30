var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  email: String,
  picture: String,
  facebookId: String,
  githubId: String
});

module.exports = mongoose.model('User', userSchema);