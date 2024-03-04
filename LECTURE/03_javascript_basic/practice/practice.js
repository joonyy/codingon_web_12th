//1.
/*
for(let i=1;i<=10000;i++){
  if(i%13 === 0 && i%2 === 1) console.log(i);
}

//1 심화
const max = prompt();
for(let i=1;i<=max;i++){
  if(i%13 === 0 && i%2 === 1) console.log(i);
} 

//2.
const mathScore = prompt('수학 점수를 입력하세요');
const engScore = prompt('영어 점수를 입력하세요');

const avg = (Number(mathScore) + Number(engScore)) / 2;
console.log(avg);

//3. 형변환
let mathScore ="77";
let engScore = "88";

let avgScore = (Number(mathScore) + Number(engScore)) / 2;
console.log(avgScore);

//4. multify
function multify(a,b){
  return a*b;
}

console.log(multify(8,7));

//5. square함수

function square(a){
  console.log(a**2);
}
square(11);

//6. if문
let age = prompt('나이를 입력하세요');
if(age >=20) console.log('성인.');
else if(age >=17) console.log('고등학생.');
else if(age >=14) console.log('중학생.');
else if(age >=8) console.log('초등학생.');
else if(age >=0) console.log('유아.');
else console.log('잘못 입력하신 것 같군요!');

//7. 합계 구하기
let sum = 0;
for(let i=1;i<=100;i++){
  if(i%2 === 0 || i%5 === 0) sum += i;
}
console.log(sum);
*/
