const {Tickets, Users} = require('../models/restaurant')
const { Op } = require("sequelize");

const getTicketForUser = async (req,res) => {
    try {
        const user = await Users.findOne({where: {Id_User: req.params.user}})
        if(user){
            const ticket = await Tickets.findOne({where: {[Op.and]: [{ Id_User: req.params.user }, { Ticket_Status: {[Op.or]: ['0', '1']} }]}})
            if(ticket) {
                return res.status(200).send({success:true, ticket});
            } else{
                const created = await Tickets.create({
                    Id_User: req.params.user
                })
                return res.status(200).send({success:true, created});
            }
        }else{
            return res.status(400).send({success:false, error: "El usuario no existe"});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

const changeTicketStatus = async (req,res) => {
    try {
        const ticket = await Tickets.findOne({where: {Id_Ticket: req.params.ticket}})
        
        if(ticket){
            const newStatus = Number(req.body.status)
            const currentStatus= Number(ticket.Ticket_Status)
            if(newStatus >= currentStatus){
                const updated = await Tickets.update({ Ticket_Status: req.body.status }, {
                    where: {
                        Id_Ticket: req.params.ticket
                    }
                });
                return res.status(200).send({success:true, ticket});
            } else {
                return res.status(400).send({success:false, error: "No puedes retroceder en el estado de un ticket"});
            }
        }else{
            return res.status(400).send({success:false, error: "El ticket no existe"});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

const getTicketsHistory = async (req,res) => {
    try {
        const user = await Users.findOne({where: {Id_User: req.params.user}})
        if(user){
            const ticket = await Tickets.findAll({where: {[Op.and]: [{ Id_User: req.params.user }, { Ticket_Status: {[Op.or]: ['2', '3']} }]}})
            return res.status(200).send({success:true, ticket});
        }else{
            return res.status(400).send({success:false, error: "El usuario no existe"});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

const getAllActiveTickets = async (req,res) => {
    try {
        const tickets = await Tickets.findAll({where: { Ticket_Status: {[Op.or]: ['0', '1']} }})
        return res.status(200).send({success:true, tickets});
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

const getAllTicketsHistory = async (req,res) => {
    try {
        const tickets = await Tickets.findAll({where: { Ticket_Status: {[Op.or]: ['2', '3']} }})
        return res.status(200).send({success:true, tickets});
    } catch (error) {
        console.log(error)
        return res.status(500).send({success: false, error})
    }
}

module.exports = { getTicketForUser, changeTicketStatus, getTicketsHistory, getAllActiveTickets, getAllTicketsHistory }