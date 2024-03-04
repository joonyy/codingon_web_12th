console.log(Math.random());// random() : 0~1 사이의 랜덤값 추출
console.log(Math.round(0.9)); // 반올림
console.log(Math.round(5.95), Math.round(5.5), Math.round(0.05));
console.log(Math.round(-5.05));

console.log(Math.max(1,3,2)); //매개변수 중 최대값

console.log(Math.min(1,3,2)); //매개변수 중 최소값


// let msg ="This is my first message";
// let result1 = msg.includes('my') // true
// let result2 = msg.includes('your') //false
// let result3 = msg.startsWith('This')// true
// let result4 = msg.startsWith('this')//false
// let result5 = msg.endsWith('e') // true
// let result6 = msg.indexOf('my') // 8
// let result7 = msg.replace('first', 'second')
// let result8 = msg.toUpperCase()
// console.log(result1,result2,result3,result4);
// console.log(result5,result6,result7,result8);

let str="  This is my first message   ";
let result1 = str.toLowerCase();
let result2 = str.trim();
let result3 = str.trimStart();
let result4 = str.trimEnd();
let result5 = str.split(' ');//공백 기준으로 분리한다.
let result6 = str.split('');//공백 없음, 한글자씩 분리한다.

console.log(result1,result2,result3,result4);
console.log(result5,result6);

const msg1=" this is \'  my first message";
const msg2=" this is \n  my first message";

console.log(msg1);
console.log(msg2);