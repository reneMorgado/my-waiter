const {Products, Categories} = require('../models/restaurant')

const getAllProducts = async (req,res) => {
    try {
        const products = await Products.findAll()
        return res.status(200).send({success: true, products})
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

const createProduct = async (req, res) => {
    try {
        const product = await Products.findOne({where: {Product_Name: req.body.name}})
        if(product){
            return res.status(400).send({success:false, error: "El producto ya existe"});
        }else {
            const created = await Products.create({
                Id_Category: req.body.category,
                Product_Name: req.body.name,
                Product_Description: req.body.description,
                Product_Image: req.body.image,
                Product_Price: req.body.price
            })
            return res.status(200).send({success: true, created})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Products.findOne({where: {Id_Product: req.params.id}})
        if(product){
            const deleted = await Products.destroy({
                where: {
                    Id_Product: req.params.id
                }
            })
            return res.status(200).send({success: true, deleted: product})
        } else {
            return res.status(500).send({success: false, error: "El producto no existe"})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error: error})
    }
}

const getProductsByCategory = async (req,res) => {
    try {
        const category = await Categories.findOne({where:{ Id_Category: req.params.category }})
        if(!category){
            return res.status(400).send({success: false, error: "La categoría no existe"})
        }
        const products = await Products.findAll({where:{ Id_Category: req.params.category }})
        return res.status(200).send({success: true, products})
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

const getProductById = async (req,res) => {
    try {
        const product = await Products.findOne({where:{ Id_Product: req.params.id }})
        return res.status(200).send({success: true, product})
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

module.exports = { getAllProducts, createProduct, deleteProduct, getProductsByCategory, getProductById }