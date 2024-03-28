let address ={
    street : '세종대로',
    city :'서울시',
    zipcode : '120'
}
console.log(address);

//Factory function 

function factoryAddress(street, city, zipcode){
  return{
    street,
    city,
    zipcode
  }
}

console.log(factoryAddress(address.street,address.city,address.zipcode));

function constructorFunc(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}
let address1 = new constructorFunc(address.street,address.city,address.zipcode);
console.log(address1);