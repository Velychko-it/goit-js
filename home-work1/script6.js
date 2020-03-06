'use strict'
let input;
let total = 0;
while (input !== null) {
    input = prompt('Введите число');
    if (Number.isNaN(Number(input))) {
        alert('Введено не число, попробуйте ввести еще раз');
    } else {
        total = total + Number(input);
    }
}
alert(`Общая сумма чисел равна ${total}`);
console.log(`Общая сумма чисел равна ${total}`);