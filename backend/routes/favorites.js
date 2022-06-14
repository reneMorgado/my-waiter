const express = require ('express');
const Router = express.Router();
const { getFavoritesByUser, addFavoriteToUser, removeFavoriteFromUser } = require('../controllers/favorites')

Router.get('/getFavoritesByUser/:user', getFavoritesByUser )

Router.post('/addFavoriteToUser/:user', addFavoriteToUser )

Router.delete('/removeFavoriteFromUser/:user', removeFavoriteFromUser )


module.exports = Router