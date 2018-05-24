npm init

npm install express --save

npm install --global babel-cli

npm install babel-preset-env
npm install babel-preset-react

https://www.jenniferbland.com/saving-data-to-mongodb-database-from-node-js-application-tutorial/

to parse data in the body will need middleware (remmogved in Express 4)
npm install body-parser --save

need to add & configure it:
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


babel client --out-dir public --presets=env,react --source-maps inline

run:
nodemon server.js