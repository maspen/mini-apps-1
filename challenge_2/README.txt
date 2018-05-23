npm install

npm install express --save

run:
nodemon server.js

npm install body-parser --save

when running JS from command line, needd to
install jquery:

npm install jquery --save

in server.js:
const express = require('express');
const http = require('http');
var bodyParser = require('body-parser');
const app = express();

...

req.body will come back as JSON