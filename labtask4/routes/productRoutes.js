const express = require('express');
const productcontroller = require('../controller/productController');
const router = express.Router();
const {requireAuthentication} = require('../middlewares/loginMiddleware');
const {authenticateToken} = require('../middlewares/loginMiddleware');

//jewellery api
router.post('/api/addProduct',productcontroller.addProduct);
router.get('/api/getProduct',productcontroller.getProduct);
router.get('/api/getProductById/:id',productcontroller.getProductById);
router.patch('/api/patchProduct',productcontroller.patchProduct);
router.get('/api/patchProduct',productcontroller.patchProduct);
module.exports = router;
