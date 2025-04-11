const express = require('express');
const { deleteProductDetails, getProductDetails, addProductDetails, updateProductDetails } = require('./product.controller');
const productRoute = express.Router();

productRoute.get('/product-details',getProductDetails );
productRoute.post('/product-details',addProductDetails );
productRoute.put('/product-details/:id', updateProductDetails );
productRoute.delete('/product-details/:idd',deleteProductDetails );
 


module.exports = productRoute;
