//객체를 선언하는 3가지 방법

//1. 
let person1 = new Object();
person1.name = 'Mike';
person1.age = 36;
person1.sayHi = function (){
  console.log(` Hello ${this.name}`);//this. == person1. 과 일맥상통.
}

console.log(person1);
person1.sayHi();

//2.리터럴
let person2 = {
  name:'John',
  age:30,
  sayHi:function(){
    console.log(`Hello ${this.name}`)
  }
}
console.log(person2);
person2.sayHi();

//3. 함수를 통한 객체 생성
function Person(name, age){
  this.name = name;
  this.age = age;
  this.sayHi = function(){
    console.log(`Hello ${this.name}`);
  }
}

let person3 = new Person('willy, 28');
console.log(person3);
//3번째의 모양은 클래스와 비슷하다.