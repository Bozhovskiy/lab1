class Ticket {
  constructor (train, number, date, sit) {
    this.train = train
    this.number = number
    this.date = date
    this.sit = sit
  }
}
const buyTicket = (collection, pass, ticket) => {
  pass.ticket = ticket.number
  console.log(`Пасажир ${pass.name} купує квиток № ${pass.ticket}`)
}

exports.Ticket = Ticket
exports.buyTicket = buyTicket
