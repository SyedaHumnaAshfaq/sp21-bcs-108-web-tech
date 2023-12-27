const Product = require("../models/product");
const bcrypt = require("bcrypt");
const req = require("express/lib/request");

const addProduct = async (req, res) => {
    
    const {title, description, price} = req.body;
    try{
    console.log('Received data:', { title, description, price });
    const newProduct = new Product({ title, description, price});
    await newProduct.save();
    res.send('Product added successfully');
    console.log("Product added successfully");
}
    catch (error) {  
    console.error(error);
    res.status(500).send('Error adding product');
    console.log("Error adding product");
    }
}
const getProduct = async (req, res) => {
        try {
            const products = await Product.find();
            console.log(products);
            res.json(products);
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal server error');
        }
      };
const getProductById = async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            console.log(product);
            res.json(product);
        } catch (error) {
          console.error(error);
          res.send(error);
        //   res.status(500).send('Internal server error');
        }
      };
const patchProduct = async(req,res) => {
        try{
          const productId = req.query.id;
          const product = await Product.findById(productId);
          console.log(product);
          if (!product) {
            return res.status(404).json({ error: 'Product not found' });
          }
          updatedData = req.body;
          console.log(updatedData);


          Object.assign(product, updatedData);
         

          await product.save();
          console.log("after update",product);
          res.send('Product updated successfully');
          // res.json(product);
        }catch(error){
          console.error(error);
          res.status(500).send('Error updating product');
        }
};
module.exports = {addProduct,getProduct,getProductById,patchProduct};