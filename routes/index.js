var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});



router.get('/delight', function(req, res){
	res.render('delight', {});
});

router.get('/register', function(req, res){
	res.render('register', {});
});



module.exports = router;
