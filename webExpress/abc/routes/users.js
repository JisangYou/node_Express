var express = require('express');
var router = express.Router();

/* GET users listing. */
//요청주소가 localhost:3000/users 일때

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//요청주소가 localhost:3000/users/hong 일때

router.get('/hong', function(req, res, next) {
  res.send('respond from hong');
});

module.exports = router;
