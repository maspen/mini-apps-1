const express = require('express');
const http = require('http');
var bodyParser = require('body-parser');
const app = express();
// var url = require('url');
// var http = require('http');
// var path = require('path');

app.use(express.static('./client'));
app.use(bodyParser.json());

var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

app.get('/', function(req, res){
	res.sendFile('./client/index.html');
});

// app.get('/json', function(req, res){
// 	console.log('got GET');
// 	console.log('req.body', req.body);

// 	res.writeHead(200, {'Content-Type': 'application/json'});
// 	res.send('firstName,lastName,county,city,role,sales');
// });

app.post('/json', function(req, res){
	console.log('got POST');
	console.log('req.body', req.body);
	res.send(JSON.stringify('Hello World'));
	// res.end();
	// res.writeHead(200, {'Content-Type': 'application/json'});
	// res.send('firstName,lastName,county,city,role,sales');
	// res.status(200).end();
});

http.createServer(app).listen(3000);
console.log('Example app listening on port 3000!')


