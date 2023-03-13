'use strict'

const mod = require('./custom_module')

const Passengers = [new mod.Passenger('Roman', 1, 12389), new mod.Passenger('Ylia', 2, 86976),
  new mod.Passenger('Arsen', 21, 12343), new mod.Passenger('Andrii', undefined, 876434)]

const Tickets = [new mod.Ticket(10, 3, new Date(2020, 2, 12, 10, 30), 99),
  new mod.Ticket(69, 21, new Date(202, 3, 13, 10, 30), 99),
  new mod.Ticket(15, 2, new Date(2020, 4, 14, 10, 30), 99),
  new mod.Ticket(18, 1, new Date(2020, 52, 15, 10, 30), 99),
  new mod.Ticket(18, 1, new Date(2020, 52, 15, 10, 30), 99),
  new mod.Ticket(18, 1, new Date(2020, 52, 15, 10, 30), 99)]

const Trains = [new mod.Train(10, 5, 15), new mod.Train(69, 8, 11),
  new mod.Train(15, 7, 13), new mod.Train(18, 3, 19)]

// Додавання нового пасажира в колекцію
console.log('\nДодавання нового пасажира в колекцію')

const addNewPass = (pass) => {
  Passengers.push(pass)
}

console.log(Passengers)

addNewPass(new mod.Passenger('Ivan', 15, 75463))

console.log(Passengers)

// Редагування пасажира в колекції
console.log('\nРедагування пасажира в колекції')

const newInfoPass = (pass, ticket, document) => {
  pass.ticket = ticket
  pass.document = document
}

console.log(Passengers[0])

newInfoPass(Passengers[0], 18, 24323)

console.log(Passengers[0])

// Видалення пасажира з колекції
console.log('\nВидалення пасажира з колекції')

const deletePass = (pass) => {
  Passengers.forEach((value, index, array) => {
    if (pass.name === value.name &&
            pass.ticket === value.ticket &&
            pass.document === value.document) array.splice(index, 1)
  })
}

console.log(Passengers)

deletePass(Passengers[2])

console.log(Passengers)

// Пошук одного пасажира в колекції
console.log('\nПошук одного пасажира в колекції')

mod.findPass(Passengers, Passengers[0])

// Додавання потяга в колекцію
console.log('\nДодавання потяга в колекцію')

const addNewTrain = (train) => {
  Trains.push(train)
}

console.log(Trains)

addNewTrain(new mod.Train(45, 16, 7))

console.log(Trains)
// Редагування потяга в колекції
console.log('\nРедагування потяга в колекції')

const editTrain = (train, newWagons, newWay) => {
  train.wagons = newWagons
  train.way = newWay
}

editTrain(Trains[2], 44, 22)
console.log(Trains)

// Видалення потяга з колекції
console.log('\nВидалення потяга з колекції')

const deleteTrain = (train) => {
  Trains.forEach((value, index, array) => {
    if (train.number === value.number &&
            train.wagons === value.wagons &&
            train.way === value.way) array.splice(index, 1)
  })
}

deleteTrain(Trains[0])

console.log(Trains)

// Пошук одного потяга в колекції
console.log('\nПошук одного потяга в колекції')

const findTrain = (train) => {
  let oveTrain

  Trains.forEach((value, index) => {
    if (value.number === train.number &&
            value.wagons === train.wagons &&
            value.way === train.way) oveTrain = value
  })
  if (oveTrain !== undefined) console.log(`Наш потяг номер ${train.number} з шляхом ${train.way}`)
  else console.log('Такого потяга не існує у колекції!')
}

findTrain(Trains[3])

// Покупка пасажиром квитка на потяг
console.log('\nПокупка пасажиром квитка на потяг')

mod.buyTicket(Passengers, Passengers[3], Tickets[0])

// Зміна квитка із одного потяга на інший
console.log('\nЗміна квитка із одного потяга на інший')

const changeTicket = (pass, ticket) => {
  const oldTicket = pass.ticket
  pass.ticket = ticket.number
  if (oldTicket === ticket.number) console.log('Ми не можемо замінити квиток на такий же! Виберіть інший квиток.')
  else console.log(`Пасажир ${pass.name} змінює квиток № ${oldTicket} на квиток №${pass.ticket}!`)
}

changeTicket(Passengers[2], Tickets[0])

// Скасування покупки квитка
console.log('\nСкасування покупки квитка')
const cancelTicket = (pass) => {
  const oldTicket = pass.ticket
  pass.ticket = undefined
  if (oldTicket === undefined) console.log(`Пасажир ${pass.name} ітак не має квитка!!!`)
  else console.log(`Пасажир ${pass.name} відміняє квиток № ${oldTicket}!!!`)
  console.log(pass)
}

cancelTicket(Passengers[0])

// Пошук потяга на який продали найбільше/найменше квитків
console.log('\nПошук потяга на який продали найбільше/найменше квитків')

mod.sellsTickets(Trains, Trains, Tickets)
