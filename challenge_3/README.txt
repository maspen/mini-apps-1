npm init

npm install express --save

npm install --global babel-cli

npm install babel-preset-env
npm install babel-preset-react


babel client --out-dir public --presets=env,react --source-maps inline

run:
nodemon server.js