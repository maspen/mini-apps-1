install nvm
https://github.com/creationix/nvm

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

nvm install 6.13.1
nvm alias default 6.13.1

*** run in each folder:
npm init --> creates package.json

npm install --save express

npm install --save-dev nodemon

* notes:

// body parser - removes req.end ...

app.get('/users', function(req, res, next) {
	// list users
})

*** mongo:
brew install mongodb

Error: mongodb 3.4.4 is already installed

data folder:
/Users/maspen/Documents/learning/hack-reactor-INTENSIVE/hrsf95-mini-apps-1/challenge_3/data

running from:
/Users/maspen/Documents/learning/hack-reactor-INTENSIVE/hrsf95-mini-apps-1/challenge_3

run mongo pointing to 'data' folder:
mongod --dbpath data
> ... waiting for connections on port 27017

npm install mongoose