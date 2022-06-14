const {Tickets, Orders, Products} = require('../models/restaurant')
const { Op } = require("sequelize");

const getProductsForOrder = async (req,res) => {
    try {
        const ticket = await Tickets.findOne({where: {Id_Ticket: req.params.ticket}})
        if(ticket){
            const order = await Orders.findAll({where: {Id_Ticket: req.params.ticket}})
            return res.status(200).send({success:true, order});
        }else{
            return res.status(400).send({success:false, error: "La orden no existe"});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

const addProductsToOrder = async (req,res) => {
    try {
        const ticket = await Tickets.findOne({where: {Id_Ticket: req.params.ticket}})
        const product = await Products.findOne({where: {Id_Product: req.body.product}})
        const ticketStatus= Number(ticket.Ticket_Status)
        if(ticket && product){
            if(ticketStatus > 0){
                return res.status(400).send({success:false, error:"No puedes añadir productos a un ticket ya emitido, finalizado o cancelado"});
            }else{
                const order = await Orders.create({
                    Id_Ticket: req.params.ticket,
                    Id_Product: req.body.product,
                    Order_Comment: req.body.comment
                })
                return res.status(200).send({success:true, order});
            }
        }else{
            return res.status(400).send({success:false, error: "La orden no existe"});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

const removeProductsFromOrder = async (req,res) => {
    try {
        const ticket = await Tickets.findOne({where: {Id_Ticket: req.params.ticket}})
        const order = await Orders.findOne({where: {[Op.and]: [{ Id_Ticket: req.params.ticket }, { id: req.body.order }]}})
        if(ticket && order){
            const deleted = await Orders.destroy({
                where: {[Op.and]: [{ Id_Ticket: req.params.ticket }, { id: req.body.order }]}
            })
            return res.status(200).send({success:true, order});
        }else{
            return res.status(400).send({success:false, error: "La orden no existe o el producto no corresponde a ella"});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

module.exports = { getProductsForOrder, addProductsToOrder, removeProductsFromOrder }