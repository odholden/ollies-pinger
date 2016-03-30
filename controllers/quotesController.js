var Quote = require('../models/quote');

function quotesIndex(req,res){
  Quote.find({}, function(err, quotes){
    if (err) return res.render('error', { message: "Something went wrong." });
    res.render('quotes/index', { quotes: quotes });
  });
}

function quotesShow(req,res){
  Quote.findById({ _id: req.params.id }, function(err, quote){
    if (err) return res.render('error', { message: "Something went wrong." });
    res.render('quotes/show', { quote: quote });
    console.log(req);
    });
}

function quotesNew(req,res){
  res.render('quotes/new');
}

function quotesCreate(req,res){
  var quote_params = req.body.quote
  var quote = new Quote(quote_params)
  quote.save(function(err){
    if (err) return res.render('error', { message: "Something went wrong." });
    return res.redirect('/quotes');
  })
}

function quotesEdit(req,res){
  Quote.findById({ _id: req.params.id }, function(err, quote){
      if (err) return res.render('error', { message: "Something went wrong." });
      res.render('quotes/edit', { quote: quote });
    });
}

function quotesUpdate(req,res){
  var id = req.params.id;
  var quoteParams = req.body.quote;
  Quote.findByIdAndUpdate({ _id: id }, quoteParams, function(err, quote) {
    if (err) return res.render("error", { message: "Something went wrong." + err });
    res.redirect('/quotes');
  })
}

function quotesDelete(req,res){
  var id = req.params.id;
  Quote.remove({_id: id}, function(err){
    if (err) return res.render("error", { message: "Something went wrong." + err });
    res.redirect('/quotes');
  })
}

module.exports = {
  quotesIndex:  quotesIndex,
  quotesNew:    quotesNew,
  quotesShow:   quotesShow,
  quotesCreate: quotesCreate,
  quotesEdit:   quotesEdit,
  quotesUpdate: quotesUpdate,
  quotesDelete: quotesDelete
}
