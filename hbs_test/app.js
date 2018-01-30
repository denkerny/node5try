var express = require('express');
var app = express();
var hbs = require('hbs');

app.set('view engine', 'hbs');//подхватываем hbs

app.use(express.static(__dirname + '/public'));



app.get('/', function (req, res) {
  	res.render('index');
});

app.get('/home', function (req, res) {
	res.render('home');
});
app.get('/about', function (req, res) {
	res.render('about');
});
app.get('/contact', function (req, res) {
	res.render('contact');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
