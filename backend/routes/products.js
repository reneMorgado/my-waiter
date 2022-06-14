const express = require ('express');
const Router = express.Router();
const { getAllProducts, createProduct, deleteProduct, getProductsByCategory, getProductById } = require('../controllers/products')

Router.get('/getProductById/:id', getProductById )

Router.get('/getProductsByCategory/:category', getProductsByCategory )

Router.get('/getAllProducts', getAllProducts )

Router.post('/createProduct', createProduct)

Router.delete('/deleteProduct/:id', deleteProduct)

module.exports = Router