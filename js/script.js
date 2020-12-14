// PROMPT DATA FROM USER
var age = prompt('Quanti hanni ha?');

var distance = prompt('Quanti km deve percorrere?');

//CONNECT TO HTML TAG
var priceTag = document.getElementById('priceTag');

//CALCULATES DEFAULT PRICE
var pricePerKm = 0.21;

var customerPrice = pricePerKm * distance;


if (age < 18) {//UNDER 18 GETS 20% DISCOUNT
  customerprice = ((pricePerKm / 100) * 20) * distance;
} else if (age < 18) {//OVER65 GETS 40% DISCOUNT
  customerPrice = ((pricePerKm / 100) * 40) * distance;
}
