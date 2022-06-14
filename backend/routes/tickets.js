const express = require ('express');
const Router = express.Router();
const { getTicketForUser, changeTicketStatus, getTicketsHistory, getAllActiveTickets, getAllTicketsHistory } = require('../controllers/tickets')

Router.get('/getTicketForUser/:user', getTicketForUser )

Router.get('/getAllActiveTickets', getAllActiveTickets )

Router.get('/getAllTicketsHistory', getAllTicketsHistory )

Router.post('/changeTicketStatus/:ticket', changeTicketStatus )

Router.get('/getTicketsHistory/:user', getTicketsHistory )

module.exports = Router