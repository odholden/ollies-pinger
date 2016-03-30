var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  name: { type: String, required: true },
  twitter: String,
  github: String,
  image: String,
  bio: String,
  portfolio: String,
  projects: [{ type: mongoose.Schema.ObjectId, ref: 'Project' }]
});

module.exports = mongoose.model('User', userSchema);