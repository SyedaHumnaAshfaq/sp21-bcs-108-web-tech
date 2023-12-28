
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const productMiddleware = require('../middlewares/productMiddleware');

router.get('/', function(req, res) {
    res.render('productpage');
  });

router.get('/addProduct.ejs', function(req, res) {
    res.render('addProduct');
  });
router.post('/api/addProduct', productController.addProduct);
router.get('/api/getProduct', productController.getProduct);
router.patch('/api/patchProduct/:id',productMiddleware.checkProductExistence, productController.patchProduct);
router.delete('/api/deleteProduct/:id',productMiddleware.checkProductExistence, productController.deleteProduct);

module.exports = router;