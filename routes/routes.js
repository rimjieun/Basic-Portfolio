const express = require('express');
const path = require('path');
const router = new express.Router();


router.post('/submit', function(req, res) {
  //req.body should have name, email, and message
  console.log('/submit route: ', req.body);
  res.redirect('/contact');
});
// Otherwise send all other requests the index.html page
// React router will handle routing withing the app
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;