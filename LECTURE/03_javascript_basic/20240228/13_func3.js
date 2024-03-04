/**
 * 화살표 연산자
 */

function add(x,y){
  return x+y;
}
// let result = add(x,y);

// let result = function(){
//   return x+y;
// }

let result = () =>{
  return x+y
}

//세개의 함수 표현은 동일하다.

/**
 * 함수 표현식 이해하기
 *   ()=> { code } 매개변수가 없을 때
 * 매개변수를 x라고 할 때  x=>{code}
 * (x,y) =>코드{ } // 매개변수가 여러개일 때
 */

//es5 식 표현
let pow= function(x){
  return x*x;
}
//es6 식 표현
let pow = x => x*x;
