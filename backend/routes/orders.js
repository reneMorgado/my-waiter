const express = require ('express');
const Router = express.Router();
const { getProductsForOrder, addProductsToOrder, removeProductsFromOrder } = require('../controllers/orders')

Router.get('/getProductsForOrder/:ticket', getProductsForOrder )

Router.post('/addProductsToOrder/:ticket', addProductsToOrder )

Router.delete('/removeProductsFromOrder/:ticket', removeProductsFromOrder )

module.exports = Router