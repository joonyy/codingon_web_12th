/**
 * 함수 선언과 함수 표현식
 */

//함수 선언
function sayHello(){
  console.log('Hello!');
}
//함수 사용법
sayHello();

//함수 표현식
let sayHi = function(){
  console.log('Hi👋');
};
//sayHi -> 안됨.
sayHi();

console.log('--------');
let a = sayHello;// a = sayhello. a()를 콘솔에 찍으면 실행됩니다!
let b = sayHi(); // b에는 함수 실행을 넣었음. 비어있다.
