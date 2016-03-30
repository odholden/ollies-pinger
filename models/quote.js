var mongoose = require('mongoose');

var quoteSchema = mongoose.Schema({
  author: String,
  content: String,
  image: String
})

module.exports = mongoose.model("Quote", quoteSchema);
