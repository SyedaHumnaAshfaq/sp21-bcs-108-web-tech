const Product = require("../models/productSchema");
// const bcrypt = require("bcrypt");
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

const patchProduct = async(req,res) => {
    try {
        const { product } = req; 
        const updatedData = req.body;
        Object.keys(updatedData).forEach((key) => {
          product[key] = updatedData[key];
        });
    
        await product.save();
    
        res.json({ message: 'Product updated successfully', updatedProduct: product });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating product' });
      }
    };
const deleteProduct = async(req,res) => {
  try{
    const { product } = req; 
    await Product.deleteOne({ _id: product._id });
    console.log("after delete",product);
    res.send('Product deleted successfully');
    // res.json(product);
  }catch(error){
    console.error(error);
    res.status(500).send('Error deleting product');
  }
};
module.exports = {addProduct,getProduct,patchProduct,deleteProduct};