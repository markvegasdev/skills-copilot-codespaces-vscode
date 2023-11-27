// Create web server

var express = require('express');
var router = express.Router();

// Get comments page
router.get('/', function(req, res, next) {
  res.render('comments', { title: 'Comments' });
});

module.exports = router;
