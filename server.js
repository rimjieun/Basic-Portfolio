const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + './public'));

app.post('/submit', function(req, res) {
  console.log('submit route: ', req.body);
  res.redirect('/contact');
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, function() {
  console.log('Connected to server. Go to http://localhost:%s.', PORT);
});