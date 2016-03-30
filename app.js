var app  = require('express')();
var http = require('http');

var sites = [
  // "http://olliespinger.herokuapp.com",
  "http://playblick.herokuapp.com",
  "http://ollieskate.herokuapp.com"
];

for (var i = 0; i < sites.length; i++) {
  setInterval(function() {
    http.get(sites[i]);
    console.log("=====================================\nPinged " + sites[i]);
  }, 3000);
}

app.listen(3000);
