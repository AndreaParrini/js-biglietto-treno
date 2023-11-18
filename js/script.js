const userKM = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
const userAge = parseInt(prompt('Inersisce la tua età'));

console.log(userKM, userAge);

let ticketPrice = userKM * 0.21;

console.log(ticketPrice);

let ticketDiscount = 0;

if (userAge < 18 ){

    ticketDiscount = ticketPrice * 0.2;

} else if (userAge >= 65) {

    ticketDiscount = ticketPrice * 0.4;

}

let ticketFullPrice = ticketPrice - ticketDiscount;

alert(ticketFullPrice.toFixed(2));