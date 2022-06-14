const {Users, Favorites, Products} = require('../models/restaurant')
const { Op } = require("sequelize");

const getFavoritesByUser = async (req,res) => {
    try {
        const user = await Users.findOne({where: {Id_User: req.params.user}})
        if(user){
            const favorites = await Favorites.findAll({where: {Id_User: req.params.user}})
            return res.status(200).send({success: true, favorites})
        } else {
            return res.status(400).send({success:false, error: "El usuario no existe"});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

const addFavoriteToUser = async (req, res) => {
    try {
        const user = await Users.findOne({where: {Id_User: req.params.user}})
        const product = await Products.findOne({where: {Id_Product: req.body.product}})
        if(user && product){
            const duplicated = await Favorites.findOne({where: {[Op.and]: [{ Id_User: req.params.user }, { Id_Product: req.body.product }]}})
            if(duplicated){
                return res.status(400).send({success: false, error: "El producto ya esta añadido a favoritos"})
            } else {
                const added = await Favorites.create({
                    Id_Product: req.body.product,
                    Id_User: req.params.user,
                })
                return res.status(200).send({success: true, added})
            }
        } else {
            return res.status(400).send({success:false, error: "El usuario o producto no existe"});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

const removeFavoriteFromUser = async (req, res) => {
    try {
        const user = await Users.findOne({where: {Id_User: req.params.user}})
        const product = await Products.findOne({where: {Id_Product: req.body.product}})
        if(user && product){
            const deleted = await Favorites.destroy({
                where: {
                    [Op.and]: [{ Id_User: req.params.user }, { Id_Product: req.body.product }],   
                }
            })
            return res.status(200).send({success: true, removed: product})
        } else {
            return res.status(400).send({success:false, error: "El usuario o producto no existe"});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

module.exports = { getFavoritesByUser, addFavoriteToUser, removeFavoriteFromUser }