"use strict";

let price;
let country;


country = prompt("Укажите страну доставки");
country = country.toUpperCase();

switch (country) {
  case "CHINA":
    price = 100;
    break;

  case "CHILI":
    price = 250;
    break;

  case "AUSTRALIA":
    price = 170;
    break;

  case "INDIA":
    price = 80;
    break;

  case "JAMAIKA":
    price = 120;
    break;

    default:
        alert('доставка сюда не осуществляеться ');
}

alert(`доствка в  ${country} будет стоить ${price} кредитов `);
