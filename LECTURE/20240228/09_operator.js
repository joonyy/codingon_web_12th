/*
  @연산자 종류
  1)산술연산자 : +, -, /, *, %, **, ++, --, +=, -=, *= /= 
  2)대입연산자 : =
  3)비교연산자 : ==, ===, !(not), !=(같지 않다.), !==(같지 않다.)
  4)삼항연산자 : 조건 ? true :false;
  5)논리연산자 : &&, ||
*/

console.log(1+1);
console.log(10-1);
console.log(10*2);
console.log(10/2);
console.log(10%2);

console.log(10%3);

// ==
console.log('------비교연산자------')
console.log(1==1);
console.log(1===1);
console.log(1==2);
console.log(1 != 1);
console.log(1 != 2);
console.log('1' == 1); //true
console.log('1' != 1); //false

console.log('1' == 1 );//true : 등호 두개 => 값만 확인함.
console.log('1' === 1);//false : 등호 세개 -> 값 + 자료형까지 확인함.

console.log('1' !== 1);
console.log('1' !== 1);

console.log('------------------');
console.log(!true);
console.log(!!true);
console.log(!false);
console.log(!!false);

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); //false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); //false

console.log(!(2>1));

console.log('0' == false); //true
console.log(''==0) //true. 

//자동증가 ++ 자동감소 --

let num=10;
console.log(num++);//10출력후 num값 1 증가
console.log(num);//11.
console.log(++num)//1증가 후 num출력 -> 12.
num = 10;
console.log(num--)//10출력 후, num값 1 감소
console.log(num) // 9
console.log(--num)//8

console.log('------------');
let x=10;
x+=10;
console.log("x : ", x);


console.log(false || true);
console.log(false || 'John');
console.log(false || 1);

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log('--------------------------');
console.log('현재 컬러는 ', currentColor);

//삼항연산자

let points = 110;
let type = points > 100 ? "gold" :"silver";
console.log(type);