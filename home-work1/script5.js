"use strict";

let price;

let message;


const country = prompt("Укажите страну доставки");
// country = country.toUpperCase();

switch (country.toUpperCase()) {
  case "CHINA":
    price = 100;
    message = `доствка в  ${country} будет стоить ${price} кредитов`
    break;


  case "CHILI":
    price = 250;
    message = `доствка в  ${country} будет стоить ${price} кредитов`
    break;

  case "AUSTRALIA":
    price = 170;
    message = `доствка в  ${country} будет стоить ${price} кредитов`
    break;

  case "INDIA":
    price = 80;
    message = `доствка в  ${country} будет стоить ${price} кредитов`
    break;

  case "JAMAIKA":
    price = 120;
    message = `доствка в  ${country} будет стоить ${price} кредитов`
    break;

    default:
        message = 'доставка сюда не осуществляеться ';
        
       
}

alert(message);
