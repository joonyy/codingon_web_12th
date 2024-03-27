//구조분해 : 배열
const arr1 = [1,2,3,4,5];
const arr2 = ['⭐️','🌏','🪐','💫','🔥'];

const [one,two,three,four,five] = arr1;

console.log(one,two,three,four,five);

const [a1,a2,a3,a4,a5] = arr2;
console.log(a1,a2,a3,a4,a5);

const list = ['orange','apple'];
const [x,y,alpha="banana"] = list;
console.log(x,y,alpha);

let num1 = 10;
let num2 = 20;
//변수의 값 교환
[num2,num1] = [num1,num2]
console.log(num1,num2);

const obj = {
  title:"3 body problems",
  star : 5,
  content : '흥미로움',
}
let {title, star, content} =  obj; //key와 이름을 맞춰야 한다!
console.log(title,star,content);

const {content:c1,star:c2,title:c3} = obj; //key의 순서가 같을 필요는 없다!
console.log(content,star,title);

const info = {
  name:'full-stack',
  time: "09:00~14:00",
  content:'집에 보내줘'
}
function getInfo(lecture){
  const {name, time, content} = lecture;
  const output = `${name}강의는 ${time}이고 ${content}!`;
  return output;
}

const result = getInfo(info);
console.log(result);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false ||true);
console.log(false || false);

//spread 연산자
const a = [1,2,3];
const b = [4,5,6];
const result1= [...a,...b];
console.log(result1);
const str="HELLO";
console.log(str);
console.log(...str)
console.log(str.split(''))//배열로 한글자씩 쪼개준다.
console.log(str.split(' ')); 

const chip={
  base:'chip',
  company:"samsung"
}
const spreatics = {
  ...chip,
  address:'마포구'
}
console.log(spreatics)