const express = require('express');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const bodyParser = require('body-parser');
const routes = require('./routes/routes'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use("/", routes);

const db = process.env.MONGODB_URI || 'mongodb://localhost/projects';

mongoose.Promise = bluebird;

var promise = mongoose.connect(db, {
  useMongoClient: true
}).then( () => {
  console.log('Mongoose connection is successful.');
}, err => {
  console.log(err);
});

app.listen(PORT, function() {
  console.log('Connected to server. Go to http://localhost:%s.', PORT);
});