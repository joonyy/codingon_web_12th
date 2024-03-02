/**
 * 객체(object)
 */

//객체는 {}사용, 배열 [], ()

// let user = {
//   name : 'Kim',
//   age:28,
//   address : '서울시 노원구',
//   sayHi : function(){
//     console.log('Hi es5 ~ ' + this.name);
//   },
//   sayHello(){
//     console.log('Hello es6 ~' + this.name);
//   }
// };
// 키 : 밸류
//객체를 불러오는 방법
// console.log(user.name);
// console.log(user['name']);
// console.log(user.age);
// console.log(user['age']);
// console.log(user.address);
// console.log(user['address']);
// user.sayHello();
// user.sayHi();

//세미콜론(;)은 언제 붙이는가? : {}으로 만든 

//ex) 함수 선언 시 function sayHi(){
//   코드
// }

// let sayHi = function(){
//   코드
// };

// let user2 = {
//   name:'John',
//   age:30,
//   "likes birds" : true,
// }
// console.log('before',user2);
// // alert(user2["likes birds"])
// //delete
// delete user2["likes birds"];
// console.log(user2);

// //추가 : 
// user2.isAdmin = true;
// console.log(user2);

//const 코드 내에서 값을 변경하지 않을 때 사용하는 변수에 사용한다.
// const user4 = {
//   name:'john',
// };

// console.log(user4.name)
// user4.name = "Peter";
// console.log(user4.name)
//const 내의 값은 변경이 가능하다!

/*
//변수를 key로 사용하는 예시
let key="isAdult";
let user5={
  name:'Smith',
  age:30,
}
console.log(user5);
user5[key] = true;
console.log(user5);
*/
/*
//계산된 (computed) 프로퍼티
let user6 = {
  name:'Peter',
  age:30,
  address:'노원구'
}
let what = prompt('사용자의 정보?', 'name');
console.log(user6[what]);
*/
/*
let fruits = prompt('어떤 과일을 구매하셨나요?','apple');
let bag={}//빈 객체 선언
bag[fruits] = 5;
console.log(bag);
*/

//아래 두 경우는 동일합니다.

// function makeUsers(name, age,){
//   return {
//     name: name,
//     age : age,

//   }
// }

function makeUser(name, age,){
  return {
    name,
    age,
  }
}

let user7 = new makeUser('Smith', 30);
let user8 = new makeUser('Hong', 34);
