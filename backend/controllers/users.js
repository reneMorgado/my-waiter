const {Users} = require('../models/restaurant')
const bcrypt = require('bcryptjs')

const getAllUsers = async (req,res) => {
    try {
        const users = await Users.findAll()
        return res.status(200).send({success: true, users})
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

const createUser = async (req, res) => {
    console.log(req.body)
    try {
        const salt = Math.floor((Math.random()) * 10)
        bcrypt.hash(req.body.password, salt, async (err, hash) => {
            if( err ) {
                return res.status(400).send({success:false, error: "Falla en la encriptacion de la contraseña"});
            } else {
                const user = await Users.findOne({where: {User_Email: req.body.email}})
                if(user){
                    return res.status(400).send({success:false, error: "El usuario ya existe"});
                }else {
                    const created = await Users.create({
                        User_Email: req.body.email,
                        User_Name: req.body.name,
                        User_Lastname: req.body.lastname,
                        Password: hash,
                        Is_Admin: req.body.admin
                    })
                    return res.status(200).send({success: true, created})
                }
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await Users.findOne({where: {Id_User: req.params.id}})
        if(user){
            const deleted = await Users.destroy({
                where: {
                    Id_User: req.params.id
                }
            })
            return res.status(200).send({success: true, deleted: user})
        } else {
            return res.status(500).send({success: false, error: "El usuario no existe"})
        }

    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

module.exports = { getAllUsers, createUser, deleteUser }