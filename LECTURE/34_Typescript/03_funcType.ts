//선택적 매개변수는 맨 뒤에 있어야만 한다!
function print(a:number, b:number, c?:number){
  console.log("print 함수 출력 결과: a=",a," b=",b," c=",c);
  console.log(a);
  console.log(b);
  console.log(c);
}

print(2,4,5);
print(2,5);

function print2(a:number, b:number, c=100) : void{
  console.log("print2 출력 결과");
  console.log(a);
  console.log(b);
  console.log(c);
}

print2(2,4,5);
print2(2,4);

//void 가 아닌 자료형을 return 하는 함수
function sayHello() : string {
  return "hi~";
}

console.log(sayHello());

//화살표 함수
const squareArea = (x:number, y:number):number =>{
  return x*y;
} 

//화살표함수 & return 생략
const squareArea2 = (x:number, y:number):number =>x*y;

console.log(squareArea(4,10));
console.log(squareArea2(4,10));

//인터페이스 정의 시 함수 타입 표현하는 법
interface Greet {
  name:string;
  hi():string;
  bye(a:number):string;
}

const codingon: Greet = {
  name:"철수",
  hi(){
    return '나는 '+this.name + '이다.';
  },
  bye(a: number){
    return `작별인사를 ${a}번 했습니다`
  },
}

console.log(codingon.hi());
console.log(codingon.bye(3))

//never 
//:함수의 끝에 절대 도달하지 않는 경우!
function goingOn():never {
  while(true){
    console.log('go!');
    //break;
  }
}

console.log(goingOn());