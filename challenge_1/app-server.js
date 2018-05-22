var express = require('express');
var http  = require('http');
var app = express();

app.use(express.static('./public'))
// var path = require('path');
// app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;

// app.get('/', function (req, res) {
// 	res.render('../public/index');
// });

app.post('/box', function(req, res) {
	console.log('got box request', req);
});

/* client.js part of html page
const button = document.getElementById('myButton');
button.addEventListener('click', function(e) {
  console.log('button was clicked');
});
*/

app.listen(port, function () {
	console.log('mini apps - challenge_1 running on ', port);
});

module.exports = app;
