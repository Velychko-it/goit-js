const logItems = function(array) {
  // const words =array.split(' ')
  // console.log(array);

  for (let i = 0; i < array.length; i += 1) {
    // console.log(i+1);
    // console.log(array[i])
    console.log(`${i + 1} - ${array[i]}...`);
  }
};
const logptems = function(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(`${i + 1} - ${numbers[i]}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logptems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


