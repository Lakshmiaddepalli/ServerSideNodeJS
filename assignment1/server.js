var express = require('express');
var dish = require('./dishRouter');
var promo = require('./promoRouter');
var leader = require('./leaderRouter');
var morgan = require('morgan');


var hostname = 'localhost';
var port = 3000;

var app = express();
app.use(morgan('dev'));


app.use('/dishes',dish);
app.use('/promotions',promo);
app.use('/leadership',leader);
app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});