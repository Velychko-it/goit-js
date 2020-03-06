const calculateEngravingPrice = function(message, pricePerWord){
    const words=message.split(' ');
    const totalPrice= words.length * pricePerWord;
  return totalPrice
}

console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  ); 
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      40,
    ),
  ); 

  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  ); 