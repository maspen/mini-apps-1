const express = require('express');
const http = require('http');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const fs = require('fs');
// var _ = require('lodash');
// const mongo = require('mongo');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

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
// var Schema = mongoose.Schema;

var UserInformationSchema = new mongoose.Schema({
		// _id: Schema.Types.ObjectId,
    //name: { type: String, trim: true, required: [true, 'name is required'] },
    name: String,
    //password: { type: String, trim: true, required: [true, 'password is required'] }
    email: String,
    password: String
});
var UserModel = mongoose.model('UserModel', UserInformationSchema );


app.use(express.static('./public'));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.post('/user', function(req, res){
console.log('got POST on user, body:', req.body);
/*
body: { name: 'matt',
  email: 'mattaspen@gmail.com',
  password: 'fooBar' }
*/
	var userModel = new UserModel(req.body);
	userModel.save(function(err, data){
		console.log('data', data);
		console.log('data._id', data._id);
		if (err) {
			res.status(400);
			res.send('unable to save to the db. error:', JSON.stringify(err.message));
		} else {
			res.status(200);
			// console.log('stringified:', JSON.stringify({ userId: data._id} ));
			// {"userId":"5b065aa5567c2445bc613b4d"}
			//res.send(JSON.stringify({ userId: data._id} ));
			res.json( { userId: data._id}  );
		}
	});
	// .then(item => {
	// 	res.status(200);
	// 	res.send(item.id);
	// })
	// .catch(err => {
	// 	res.status(400);
	// 	res.send('unable to save to the db');
	// })
// set data
// userModel.save(function(err, user){
//		user.id
// })
/*
	User.save(function(err, user){
		if (err) {
			throw err;
		}
		console.log(user successfully saved, id:', user.id);
	});

	.then -> returned if saved suffessfully so send data back to use that save was oj
						status code 200
	.catch -> returned if fails, send txt back that there was a failure, set
	          status code to 400

*/
	// res.send(JSON.stringify('user submitted'));
});
app.get('/user', function(req, res){
console.log('got POST on user, body:', req.body);

	res.write('user info to follow')
})


http.createServer(app).listen(3000);
console.log('Example app listening on port 3000!')