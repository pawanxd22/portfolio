var express = require('express');
var router = express.Router();

/**
 * GET Homepage
 */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'PawanxD - Full Stack Developer' });
});

module.exports = router;
