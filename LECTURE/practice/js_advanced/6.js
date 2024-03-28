function howMuch(salePercentage, ...prices){
  let totalPrice = 0;
  for(price of prices){
    totalPrice +=price;
  }
  return totalPrice * (1-(salePercentage*0.01));
}
console.log(howMuch(10,4000,6000));