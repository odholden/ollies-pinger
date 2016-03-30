var mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost:27017/quotes-app';
mongoose.connect(databaseUrl);

var Quote = require('../models/quote');

Quote.collection.drop();

function saveToDb(err,quote) {
  if (err) console.log(err);
  console.log("quote has been saved: " + quote)
}

var quotes = [
  {
    author:    "Maria Antoinette",
    content: "Let them eat cake.",
    image: "https://www.coldstonecreamery.com/assets/img/products/signaturecakes/signature-cakes-strawberrypassion.jpg"
  },
  {
    author:    "Winston Churchill",
    content: "I may be drunk, Miss, but in the morning I will be sober and you will still be ugly.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Churchill_HU_90973.jpg"
  },
  {
    author:    "Steve Martin",
    content: "A day without sunshine is like, y'know, night.",
    image: "https://phandroid.s3.amazonaws.com/wp-content/uploads/2015/01/night-5.jpg"
  },
  {
    author:    "Oscar Levant",
    content: "Roses are red, violets are blue, I'm schizophrenic, and so am I.",
    image: "http://agriscaping.com/wp-content/uploads/2015/09/Small_Red_Rose.jpg"
  }
]

quotes.forEach(function(quote, index){
  var newQuote = new Quote(quote);
  newQuote.save(saveToDb);
})
