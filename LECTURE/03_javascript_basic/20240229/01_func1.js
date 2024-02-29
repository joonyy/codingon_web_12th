/**
 * 매개변수를 갖는 함수.
 * 
 */

function greeting(surname, lastname){
  console.log(`Welcome, ${surname} ${lastname}님!`);
}

greeting('kang');
greeting("Kim","Joony");

// function sum(a,b){
//   return a+b;
// }

// let result = sum(1,2);
// console.log(`첫번째 결과는 ${result}`)//3

// let result1 = sum(1,2,3,4);
// console.log(`두번째 결과는 ${result1}`)//3

function sum(){
  console.log(arguments);
  let total = 0;
  for(argument of arguments){
    total+=argument;
  }
  return total;
}
result = sum(1,2,300,4,6);
console.log(result);

/**
 * rest operation(펼침연산자) : ...
 */

console.log('---------------');

function addAll(a, b, ...args){
  console.log(a,b);
  console.log(args);
}
addAll(1,2,3,4,5,6);

