var express        = require('express'),
    morgan         = require('morgan'),
    bodyParser     = require('body-parser'),
    path           = require('path'),
    expressLayouts = require('express-ejs-layouts'),
    methodOverride = require('method-override'),
    mongoose       = require('mongoose'),
    routes         = require('./config/routes');

var databaseUrl    = 'mongodb://localhost:27017/quotes-app';
mongoose.connect(databaseUrl);

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(function(req){
  if (req.body && typeof req.body == 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  } 
}));
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));
app.use(routes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3000);
console.log("Express is listening on localhost:3000");