const Passenger = require('./Passenger')
const Ticket = require('./Ticket')
const Train = require('./Train')

exports.Passenger = Passenger.Passenger
exports.findPass = Passenger.findPass
exports.buyTicket = Ticket.buyTicket
exports.Ticket = Ticket.Ticket
exports.Train = Train.Train
exports.sellsTickets = Train.sellsTickets
