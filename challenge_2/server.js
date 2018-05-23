const express = require('express');
const http = require('http');
var bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
var _ = require('lodash');

app.use(express.static('./client'));
app.use(bodyParser.json());

var jsonFilePath = 'sales_report.json';

var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

app.get('/', function(req, res){
	res.sendFile('./client/index.html');
});

app.post('/json', function(req, res){
	console.log('got POST');
	console.log('req.body', req.body);

	// app.js is expecting json so have to stringify
	res.send(JSON.stringify('Hello World'));
});

app.post('/csv', function(req, res){
	console.log('got POST csv');

	getCsv(jsonFilePath, getCsvCallback);

	// app.js is expecting json so have to stringify
	res.send(JSON.stringify('Hello World from cvs'));
});

var getCsv = (jsonFilePath, callback) => {
	console.log('inside jsonGet');

	fs.readFile(jsonFilePath, (err, data) => {
	  if (err) {
	  	callback(err, null);
	  };
	  callback(null, JSON.parse(data));
	});
};

/** ---- json parsing ----- */
var getCsvCallback = function(error, data) {
	if (error) {
		console.log('getCsvCallback error', error);
		return;
	}

	createCSVString(data);
}

var createCSVString = (object) => {
	// get heading
	var headingArr = Object.getOwnPropertyNames(object);
/*
[ 'firstName',
  'lastName',
  'county',
  'city',
  'role',
  'sales',
  'children' ]
*/
	// need to trim 'children'
	headingArr = _.dropRight(headingArr);
/*
[ 'firstName', 'lastName', 'county', 'city', 'role', 'sales' ]
*/
	var linesArr = [];

	var recurse = (obj) => {

		_.forEach(obj, function(value, key) {
			if(_.isArray(value)) {
				if (_.isEmpty(value)) {
					// do nothing
				} else {
					_.forEach(value, function(value) {
					recurse(value);
					})
				}
			} else {
				linesArr.push(value);
			}
		})
	};

	recurse(object);

	// need to create string with line breaks after each
	// character that is headingArr.length - 1
	var csv = '';
	// get the length of heading
	var lineLength = headingArr.length;

	// concatenate heading & linesArr
	var allLinesArray = _.concat(headingArr, linesArr);
	var lineLengthCounter = 0;
	_.forEach(allLinesArray, function(word){
		csv += word;
		csv += ",";
		lineLengthCounter++;
		if(lineLengthCounter === lineLength) {
			// trim the last ','
			csv = csv.substring(0, csv.length - 1);
			csv += '\n';
			lineLengthCounter = 0;
		}
	});
	
	console.log(csv);
/*
firstName,lastName,county,city,role,sales
Joshie,Wyattson,San Mateo,San Mateo,Broker,1000000
Beth Jr.,Johnson,San Mateo,Pacifica,Manager,2900000
Smitty,Won,San Mateo,Redwood City,Sales Person,4800000
Allen,Price,San Mateo,Burlingame,Sales Person,2500000
Beth,Johnson,San Francisco,San Francisco,Broker/Sales Person,7500000
*/	
}

var parserCallback = (error, data) => {
	if(error) {
		console.log('parserCallback error', '[' +error + ']');
		return;
	}
	console.log('parserCallback data', data);
};

http.createServer(app).listen(3000);
console.log('Example app listening on port 3000!')