//require express
var express = require('express');

//create router object
var router = express.Router();

//export router
module.exports = router;

//route for homepage

router.get('/', function(req, res) {
	res.send('hello world!');
});


//route for aboutpage

router.get('/about', function(req, res) {
	res.send('this is our about page');
});

router.get('/contact');
router.post('/contact');