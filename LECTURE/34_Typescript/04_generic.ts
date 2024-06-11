//generic
//선언할 때 타입을 지정하기 어려운 경우
//dataType을 외부에서 지정한다.
// - 생성 시점에 type 명시
// => "재사용성 증가"
// => "타입을 하나의 변수처럼 사용한다."
//<T>와 같은 형태로 사용한다.



// <T>를 통해 매개변수를 선언하는 공간을 하나 더 생성.
//->type만 올 수 있다!
function arrLen<T>(arr:T[]):number{
  return arr.length;
}

console.log(arrLen<number>([1,2,3]));
console.log(arrLen<string>(['1','2','3']));
console.log(arrLen<string|number>([1,"문자",2]))


function printSome<T>(x:T,y:T){
  console.log(x,y);
}
printSome<string>("hi","hello") //hi, hello
printSome<number>(100,200)//100, 200
printSome<boolean[]>([true,false],[false,false]);//[true, false] [false,false];

function printSome2<T,U>(x:T, y:U){
  console.log(x,y);
}
printSome2<string,number>('1',100);

interface Phone<T> {
  company:string;
  createdAt:Date;
  option:T;
  
}

type iphoneOption = {
  color:string;
  storage:number;
}

const iphone15 : Phone<iphoneOption>={
  company:"apple",
  createdAt:new Date(),
  option :{
    color:'white',
    storage:128
  }
}
console.log(iphone15);

type galaxyOption = {
  color:string,
  isBuz:boolean;
};
const galaxy24 : Phone<galaxyOption>={
  company:"samsung",
  createdAt:new Date(),
  option:{
    color:"white",
    isBuz:true,
  },
}

console.log(galaxy24);