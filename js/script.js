const userName = prompt('Inserisci qua il tuo nome e il tuo cognome.');
const userAge = parseInt(prompt('Inersisce la tua età'));
const userKM = parseInt(prompt('Quanti chilometri vuoi percorrere?'));

document.getElementById('username').innerHTML= userName;
document.getElementById('userage').innerHTML= userAge;
document.getElementById('userkm').innerHTML= userKM;

let ticketPrice = userKM * 0.21;
document.getElementById('ticket_price').innerHTML= `${ticketPrice.toFixed(2)}€`;

let ticketDiscount = 0;

if (userAge < 18 ){

    ticketDiscount = ticketPrice * 0.2;
    document.getElementById('discount_description').innerHTML= "Sconto (Under 18)";
    document.getElementById('discount_price').innerHTML= `${ticketDiscount.toFixed(2)}€`;

} else if (userAge >= 65) {

    ticketDiscount = ticketPrice * 0.4;
    document.getElementById('discount_description').innerHTML= "Sconto (Over 65)";
    document.getElementById('discount_price').innerHTML= `${ticketDiscount.toFixed(2)}€`;

}

let ticketFullPrice = ticketPrice - ticketDiscount;
document.getElementById('full_price').innerHTML= `${ticketFullPrice.toFixed(2)}€`;
