const {Categories} = require('../models/restaurant')

const getAllCategories = async (req,res) => {
    try {
        const categories = await Categories.findAll()
        return res.status(200).send({success: true, categories})
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

const createCategory = async (req, res) => {
    try {
        const category = await Categories.findOne({where: {Category_Title: req.body.title}})
        if(category){
            return res.status(400).send({success:false, error: "La categoria ya existe"});
        }else {
            const created = await Categories.create({
                Category_Title: req.body.title,
                Category_Image: req.body.image,
            })
            return res.status(200).send({success: true, created})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

const deleteCategory = async (req, res) => {
    try {
        const category = await Categories.findOne({where: {Id_Category: req.params.id}})
        if(category){
            const deleted = await Categories.destroy({
                where: {
                    Id_Category: req.params.id
                }
            })
            return res.status(200).send({success: true, deleted: category})
        } else {
            return res.status(500).send({success: false, error: "La categoria no existe"})
        }

    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error: error})
    }
}

module.exports = { getAllCategories, createCategory, deleteCategory }