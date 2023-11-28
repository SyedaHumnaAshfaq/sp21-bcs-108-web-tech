
const express = require('express');
const usercontroller = require('../controller/userController');

const router = express.Router();

router.post('/register', usercontroller.register);

router.get('/', function(req, res) {
  res.render('pages/markup');
});


router.get('/registration.html', function(req, res) {
    res.render('pages/registration');
  });
router.get('/articlevariety.html', function(req, res) {
    res.render('pages/articlevariety');
  });
router.get('/login.html', function(req, res) {
    res.render('pages/login');
  });
  
module.exports = router;