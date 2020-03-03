const total = 100;
const ordered = 50;

const good = "Заказ оформлен, с вами свяжется менеджер";
const bad = "На складе недостаточно твоаров!";

if (ordered > total) {
  console.log(bad);
} else {
  console.log(good);
}



