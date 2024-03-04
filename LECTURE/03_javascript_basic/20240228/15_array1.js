/* 배열 : 매우 중요함. */
/**
 * 변수도 값을 저장, 배열도 값을 저장.
 * 배열은 하나의 이름에 여러개의 값을 저장.
 */
let a = 10;
a = 20;

console.log(a);

let b = [1,2,3,4,5];
console.log(b);
console.log(b[2]);
console.log(b[0]);

let fruits = ['🍎','🍑','🍍','🥦','🥪'];

for(i in fruits){
  console.log(fruits[i]);
}