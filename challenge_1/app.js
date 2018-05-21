var express = require('express');
var http  = require('http');
var app = express();

app.use(express.static('./public'))
// var path = require('path');
// app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;

app.listen(port, function () {
	console.log('mini apps - challenge_1 running on ', port);
});

// app.use('/', index);

app.get('/', function (req, res) {
	res.render('../public/index');
});

module.exports = app;
