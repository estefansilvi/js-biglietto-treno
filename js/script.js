// PROMPT DATA FROM USER
var age = prompt('Quanti hanni ha?');

var distance = prompt('Quanti km deve percorrere?');

//CONNECT TO HTML TAG
var price = document.getElementById('price');

if (isNaN(distance) || isNaN(age) ) {
alert('Inserire solo numeri');
}else{

var price =parseInt(distance) * 0.21;
console.log(price + '£');
}

//CALCULATES DEFAULT PRICE
var sconto;
var pricePerKm = 0.21;

var price = (pricePerKm * distance);

if (age < 18) {
 sconto = (price * 20) / 100;
}else if (age > 65) {
 sconto = (price * 40) / 100;
}else{
  sconto = 0;
}

var finalPrice = price - sconto;
document.getElementById('price').innerHTML = finalPrice;
