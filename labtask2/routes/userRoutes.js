
const express = require('express');
const usercontroller = require('../controller/userController');


const router = express.Router();
const {requireAuthentication} = require('../middlewares/loginMiddleware');
const {authenticateToken} = require('../middlewares/loginMiddleware');
router.post('/register', usercontroller.register);
router.post('/login', usercontroller.login);
router.post('/logout', usercontroller.logout);
router.get('/logout', usercontroller.logout);

// user api
router.get('/api/users', authenticateToken,usercontroller.getUsers);
router.post('/api/users', authenticateToken,usercontroller.postUsers);
router.put('/api/users', authenticateToken,usercontroller.putUsers);
router.delete('/api/users', authenticateToken,usercontroller.deleteUsers);


router.get('/', function(req, res) {
  res.render('pages/markup');
});


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
router.get('/adminPanel.html', requireAuthentication, function(req, res) {
    res.render('pages/adminPanel');
  }
);
router.get('/addProduct.html',function(req, res) {
  res.render('pages/addProduct');
}
);
router.get("/patchProduct.html",function(req, res) {
  res.render('pages/patchProduct');
}
);
module.exports = router;