const express = require('express');
const http = require('http');
var bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

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

/** ---- json parsing ----- */
var getCsvCallback = function(error, data) {
	if (error) {
		console.log('getCsvCallback error', error);
		return;
	}
	//console.log('getCsvCallback data', data);

	// change jsonFilePath tp retulData
	//jsonGet(jsonFilePath);
	jsonParser(data, parserCallback);
}

var parserCallback = (error, data) => {
	if(error) {
		console.log('parserCallback error', '[' +error + ']');
		return;
	}
	console.log('parserCallback data', data);
}

var getCsv = (jsonFilePath, callback) => {
	console.log('inside jsonGet');

	fs.readFile(jsonFilePath, (err, data) => {
	  if (err) {
	  	callback(err, null);
	  };
	  callback(null, JSON.parse(data)); // partial doc
/*
getCsvCallback data { firstName: 'Joshie',
  lastName: 'Wyattson',
  county: 'San Mateo',
  city: 'San Mateo',
  role: 'Broker',
  sales: 1000000,
  children: 
   [ { firstName: 'Beth Jr.',
       lastName: 'Johnson',
       county: 'San Mateo',
       city: 'Pacifica',
       role: 'Manager',
       sales: 2900000,
       children: [Object] },
     { firstName: 'Beth',
       lastName: 'Johnson',
       county: 'San Francisco',
       city: 'San Francisco',
       role: 'Broker/Sales Person',
       sales: 7500000,
       children: [] } ] }
*/	  
	  // callback(null, JSON.stringify(data)); // just #s
	});
};

var jsonParser = (JSONData, callback) => {
	console.log('inside jsonParser');
	if(null === JSONData || JSONData === '') {
		callback('file was null or emptu', null);
	}

	// console.log('JSONData', JSONData);

	// create the heading
	var heading = ''
	for (let key in JSONData) {
		if(key !== "children") {
			heading += key + ',';
		}
	}
	// trim last comma
	heading = heading.substring(0, heading.length - 1);
	heading += '\n';

	console.log('heading:', heading);

	var lines = '';
	var printObject = (obj, lines, callback) => {
		for(var key in obj) {
			if(key !== 'children') {
				lines += obj[key] + ',';
			}
		}
		// trim last ','
		lines = lines.substring(0, lines.length - 1);
		// add new line
		lines += '\n';

		callback(null, lines);
	};

	printObject(JSONData, '', callback);

	/*
	else {
				// trim last ','
				lines = lines.substring(0, lines.length - 1);
				// add new line
				lines += '\n';

				var childArr = obj.key;
				if(childArr.length !== 0) {
					childArr.forEach(function(child){
						printObject(child);
					})
				}
*/

	// console.log('lines:', lines);

	// callback(null, 'PARSED');
}

http.createServer(app).listen(3000);
console.log('Example app listening on port 3000!')