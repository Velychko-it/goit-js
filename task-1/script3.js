"use strict";

const ADMIN_PASSWORD = "123";

let message;

const password = prompt("Please enter password:");

if (password === null) {
  console.log('work')
  message = "canceled by user";
} else if (password === ADMIN_PASSWORD) {
  message = "welcome";
} else {
  message = "wrong password ";
};

alert(message);
