/**
 * 객체(object)
 */

//객체는 {}사용, 배열 [], ()

let user = {
  name : 'Kim',
  age:28,
  address : '서울시 노원구',
  sayHi : function(){
    console.log('Hi es5 ~ ' + this.name);
  },
  sayHello(){
    console.log('Hello es6 ~' + this.name);
  }
};
// 키 : 밸류
//객체를 불러오는 방법
console.log(user.name);
console.log(user['name']);
console.log(user.age);
console.log(user['age']);
console.log(user.address);
console.log(user['address']);
user.sayHello();
user.sayHi();