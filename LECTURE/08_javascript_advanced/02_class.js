const today = new Date(); // today : 인스턴스

// class Car{
//   constructor (){

//   }
//   method1(){ }
//   method2(){ }
//   method3(){ }
// }

/*
class User{//=== User.prototype.constructor
  constructor(name){
    this.name = name;
  }
  sayHi(){
    console.log(`${this.name} ,Hello`);
  }
}
let user = new User('Smith');
user.sayHi();
let user1 = new User('Peter');
user1.sayHi();
*/

function User(name){
  this.name=name;
}
User.prototype.sayHi = function(){//함수를 클래스로 변경할 수 있다. 
  console.log(this.name + " 안녕");
}
let user2 = new User('John');
user2.sayHi();
