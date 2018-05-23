const express = require('express');
const http = require('http');
var bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
// var _ = require('lodash');

app.use(express.static('./public'));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.sendFile('index.html');
});


http.createServer(app).listen(3000);
console.log('Example app listening on port 3000!')