//true, false 확인하기
console.log(true==1);
console.log(false==0);
let big= 999999999999999; //15자리 이상
console.log(big);

let big2=9999999999999999; //16자리
console.log(big2);

//제일 큰 값 알아보기
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//Boolean 알아보기 : 이세상의 값 중 단 2가지 상태로 표현할 수 있는 값에 사용
console.log( 10> 0);
console.log( 10> 11);

let somebody=null;
console.log(somebody); //null

let somebody2;
console.log(somebody2); //undefined

//심볼 : 유일무이한 값을 만들 때 사용한다.
console.log('심볼');
const a1 = '1';
const a2 = '1';
console.log(a1===a2);

const b1=Symbol('1');
const b2=Symbol('1');
console.log(b1 === b2); 

//BigInt 값을 만들려면?
let num = 3945948687n;

//데이터타입을 알아보는 명령어 : typeof
console.log(typeof num);

let surname="Kim";
console.log(typeof surname);

let age=30;
console.log(typeof age);

let isMale=false;
console.log(typeof isMale);

let selector=undefined;
console.log(typeof selector);

let selectFont = null;
console.log(typeof selectFont);


///  infinity
let x = Infinity;
let y = -Infinity;
console.log(x,y);
console.log(x,y,typeof(x), typeof(y));
