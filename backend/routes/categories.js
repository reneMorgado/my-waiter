const express = require ('express');
const Router = express.Router();
const { getAllCategories, createCategory, deleteCategory } = require('../controllers/categories')

Router.get('/getAllCategories', getAllCategories )

Router.post('/createCategory', createCategory)

Router.delete('/deleteCategory/:id', deleteCategory)

module.exports = Router