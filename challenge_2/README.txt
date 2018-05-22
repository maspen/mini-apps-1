npm install

npm install express --save

run:
nodemon server.js

npm install body-parser --save

in server.js:
const express = require('express');
const http = require('http');
var bodyParser = require('body-parser');
const app = express();

...

req.body will come back as JSON