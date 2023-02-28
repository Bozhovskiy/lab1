class Passenger {
    constructor(name, ticket, document) {
        this.name = name;
        this.ticket = ticket;
        this.document = document;
    }
}

class Ticket {
    constructor(train, number, date, sit) {
        this.train = train;
        this.number = number;
        this.date = date;
        this.sit = sit;
    }
}

class Train {
    constructor(number, wagons, way) {
        this.number = number;
        this.wagons = wagons;
        this.way = way;
    }
}

let Passengers = [
    new Passenger('Roman', 1, 12389), new Passenger('Ylia', 2, 86976),
    new Passenger('Arsen', 21, 12343), new Passenger('Andrii', undefined, 876434)];

let Tickets = [
    new Ticket(10, 3, new Date(2020, 2, 12, 10, 30), 99),
    new Ticket(69, 21, new Date(202, 3, 13, 10, 30), 99),
    new Ticket(15, 2, new Date(2020, 4, 14, 10, 30), 99),
    new Ticket(18, 1, new Date(2020, 52, 15, 10, 30), 99),
    new Ticket(18, 1, new Date(2020, 52, 15, 10, 30), 99),
    new Ticket(18, 1, new Date(2020, 52, 15, 10, 30), 99)];

let Trains = [
    new Train(10, 5, 15), new Train(69, 8, 11),
    new Train(15, 7, 13), new Train(18, 3, 19)];

// Додавання нового пасажира в колекцію
console.log('\nДодавання нового пасажира в колекцію');

let addNewPass = (pass) => {
    Passengers.push(pass);
};

console.log(Passengers);

addNewPass(new Passenger('Ivan', 15, 75463));

console.log(Passengers);

// Редагування пасажира в колекції
console.log('\nРедагування пасажира в колекції');

let newInfoPass = (pass, ticket, document) => {
    pass.ticket = ticket;
    pass.document = document;
};

console.log(Passengers[0]);

newInfoPass(Passengers[0], 19, 24523);

console.log(Passengers[0]);

// Видалення пасажира з колекції
console.log('\nВидалення пасажира з колекції');

let deletePass = (pass) => {
    Passengers.forEach((value, index, array) => {
        if (pass.name === value.name &&
            pass.ticket === value.ticket &&
            pass.document === value.document) array.splice(index, 1)
    })
};

console.log(Passengers);

deletePass(Passengers[2]);

console.log(Passengers);

// Пошук одного пасажира в колекції
console.log('\nПошук одного пасажира в колекції');
let findPass = (pass) => {
    let ovePass;

    Passengers.forEach((value) => {

        if (value.name === pass.name &&
            value.ticket === pass.ticket &&
            value.document === pass.document) ovePass = value;
    });
    if (ovePass !== undefined) console.log(`Наш пасажир: ${ovePass.name} з квитком ${ovePass.ticket}`);
    else console.log('Такого пасажира не існує у колекції!')

};

findPass(Passengers[0]);

// Додавання потяга в колекцію
console.log('\nДодавання потяга в колекцію');

let addNewTrain = (train) => {
    Trains.push(train);
};

console.log(Trains);

addNewTrain(new Train(45, 16, 7));

console.log(Trains);
// Редагування потяга в колекції
console.log('\nРедагування потяга в колекції');

let editTrain = (train, newWagons, newWay) => {
    train.wagons = newWagons;
    train.way = newWay;
};

editTrain(Trains[2], 44, 22);
console.log(Trains);

// Видалення потяга з колекції
console.log('\nВидалення потяга з колекції');

let deleteTrain = (train) => {
    Trains.forEach((value, index, array) => {
        if (train.number === value.number &&
            train.wagons === value.wagons &&
            train.way === value.way) array.splice(index, 1)

    })
};

deleteTrain(Trains[0]);

console.log(Trains);

// Пошук одного потяга в колекції
console.log('\nПошук одного потяга в колекції');


let findTrain = (train) => {
    let oveTrain;

    Trains.forEach((value) => {

        if (value.number === train.number &&
            value.wagons === train.wagons &&
            value.way === train.way) oveTrain = value;
    });
    if (oveTrain !== undefined) console.log(`Наш потяг номер ${train.number} з шляхом ${train.way}`);
    else console.log('Такого потяга не існує у колекції!')

};

findTrain(Trains[3]);

// Покупка пасажиром квитка на потяг
console.log('\nПокупка пасажиром квитка на потяг');

let byeTicket = (pass, ticket) => {
    pass.ticket = ticket.number;
    console.log(`Пасажир ${pass.name} купує квиток № ${pass.ticket}`)
};

byeTicket(Passengers[3], Tickets[5]);

// Зміна квитка із одного потяга на інший
console.log('\nЗміна квитка із одного потяга на інший');

let changeTicket = (pass, ticket) => {
    let oldTicket = pass.ticket;
    pass.ticket = ticket.number;
    if (oldTicket === ticket.number) console.log('Ми не можемо замінити квиток на такий же! Виберіть інший квиток.');
    else console.log(`Пасажир ${pass.name} змінює квиток № ${oldTicket} на квиток №${pass.ticket}!`)
};

changeTicket(Passengers[2], Tickets[0]);

// Скасування покупки квитка
console.log('\nСкасування покупки квитка');
let cancelTicket = (pass) => {
    let oldTicket = pass.ticket;
    if (oldTicket === undefined) console.log(`Пасажир ${pass.name} ітак не має квитка!!!`)
    else console.log(`Пасажир ${pass.name} відміняє квиток № ${oldTicket}!!!`)
};

cancelTicket(Passengers[0]);

//Пошук потяга на який продали найбільше/найменше квитків
console.log('\nПошук потяга на який продали найбільше/найменше квитків');

let sellsTickets = (trains, tickets) => {
    let allTrains = {};
    let fin = {MaxTrain: '', MinTrain: '', min: 0, max: 0};


    trains.forEach(value => {

        allTrains[value.number] = 0;

        tickets.forEach(ticket => {

            if (value.number === ticket.train) allTrains[value.number] = allTrains[value.number] + 1;
        })
    });


    let max = Object.values(allTrains)[0];
    let min = Object.values(allTrains)[0];

    for (let key in allTrains) {
        if (allTrains[key] > max) {
            fin.max = allTrains[key];
            fin.MaxTrain = key;
        }
        if (allTrains[key] < min) {
            fin.min = allTrains[key];
            fin.MinTrain = key;
        }
    }

    console.log(`Найбільше квитків (${fin.max}) продали на поїзд ${fin.MaxTrain}`);
    console.log(`Найменше квитків (${fin.min}) продали на поїзд ${fin.MinTrain}`);

};


sellsTickets(Trains, Tickets);
