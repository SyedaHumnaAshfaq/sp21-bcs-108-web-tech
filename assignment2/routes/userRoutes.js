
const express = require('express');
const usercontroller = require('../controller/userController');

const router = express.Router();
const {requireAuthentication} = require('../middlewares/loginMiddleware');

router.post('/register', usercontroller.register);
router.post('/login', usercontroller.login);
router.post('/logout', usercontroller.logout);
router.get('/logout', usercontroller.logout);

router.get('/', function(req, res) {
  res.render('pages/markup');
});
// router.get("/logout", function(req, res) {
//     res.render('pages/markup');
//   });
router.get('/registration.html', function(req, res) {
    res.render('pages/registration');
  });
router.get('/articlevariety.html', requireAuthentication,function(req, res) {
    res.render('pages/articlevariety');
  });
router.get('/login.html', function(req, res) {
    res.render('pages/login');
  });
router.post('/login.html', function(req, res) {
    res.render('pages/login');
  });
router.post('/articlevariety.html', requireAuthentication, function(req, res) {
    res.render('pages/articlevariety');
  });
module.exports = router;