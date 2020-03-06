const credits = 23580;

const pricePerDroid = 3000;

let message;

const userInput = prompt("how much droids do you want buy?");

let totalPrice = pricePerDroid * Number(userInput);
let balance = credits - totalPrice;

if (userInput === null) {
  message = "canceled by user";
} else if (totalPrice > credits) {
  message = "not enough on account";
} else {
  message = `you buy ${userInput} droids ${balance}
     credits left on the account`;
}

alert(message);
