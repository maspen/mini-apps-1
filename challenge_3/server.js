const express = require('express');
const http = require('http');
var bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
// var _ = require('lodash');
// const mongo = require('mongo');
const mongoose = require('mongoose');

//var mongoDB = 'mongodb://127.0.0.1/checkout';
mongoose.connect('mongodb://127.0.0.1/checkout', function(err) {
	if (err) {
		throw err;
	}
	console.log('mongo successfully connected');
});

var db = mongoose.connection;

//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/*
	create mongo/mongoose models/schemas

	UserInformation
		id //userId
		name
		email
		password

	ShippingInfo
		id
		* userId
		line1
		line2
		city
		zip
		state
		zip
		phone

	CreditCard
		id
		* userId
		cardNumber
		expiry
		cvv
		zip
*/
var Schema = mongoose.Schema;

var UserInformationSchema = new Schema({
		_id: Schema.Types.ObjectId,
    //name: { type: String, trim: true, required: [true, 'name is required'] },
    name: String,
    //password: { type: String, trim: true, required: [true, 'password is required'] }
    email: String,
    password: String
});

var User = mongoose.model('UserInformationModel', UserInformationSchema );


app.use(express.static('./public'));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.sendFile('index.html');
});

app.post('/user', function(req, res){
console.log('got POST on user, body:', req.body);
/*
	User.save(function(err, user){
		if (err) {
			throw err;
		}
		console.log(user successfully saved, id:', user.id);
	});
*/
	res.send(JSON.stringify('user submitted'));
});
app.get('/user', function(req, res){
console.log('got POST on user, body:', req.body);

	res.write('user info to follow')
})


http.createServer(app).listen(3000);
console.log('Example app listening on port 3000!')