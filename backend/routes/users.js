const express = require ('express');
const Router = express.Router();
const { getAllUsers, createUser, deleteUser } = require('../controllers/users')

Router.get('/getAllUsers', getAllUsers )

Router.post('/createUser', createUser)

Router.delete('/deleteUser/:id', deleteUser)

module.exports = Router