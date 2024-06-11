//only typescript type

//tuple
let drink: [string, string] = ['사이다','롯데'];
drink[0] = 'cider';
drink.push('야호'); //tuple의 한계. -> push 메서드로는 들어간다..!
console.log(drink);

//readonly 속성으로 변경을 막아버릴 수 있다.

let drink2: readonly[string, number] = ['사이다',12];
// drink2.push('야호');

type productInfo = [number,string, number] //type 선언
let product1: productInfo = [1, 'logitech', 1300];
// let product2: productInfo = ['로지텍', 1, '1300']; //에러발생

enum Auth{ // DB에 Admin, user 등
	admin = 0,
	user = 1,
	guest = 2,
}

enum Cafe{
  americano = "아메리카노",
  latte = '카페라떼',
}

enum Cake {
  choco, //기본값 = 0. 
  banana,//기본값 = 1.
  strawberry="딸기 케이크",
}


console.log(Auth.admin);
console.log(Cafe.americano);
console.log(Cake.choco);
console.log(Cake.strawberry);

//////////////////////////////////////////////////////////////////////////////

interface Student {
	name: string;
	grade: number;
	isPassed: boolean;
}

const student1: Student ={
  name:'jh',
  grade:2,
  isPassed:true,
  // addr:'string' //에러발생.
}

//Score라는 타입을 만들어준 것!
type Score = 'A+' | 'A' | 'B' | 'C'; 

let score1:Score = 'A';
// let score2:Score = 'D'; //에러 발생

type Score2 = 100 | 90 | 80 | 70;

let score2:Score2 = 80;
// let score3:Score2 = 83.5321;


//enum vs type

enum Score3{
  A = 100,
  B = 90,
  C = 80,
}

console.log(Score3.A);

interface BaseballClub extends Student{
	position : string;
	height: number;
	readonly backNumber?: number; //?:란 있어도 되고 없어도 된다는 뜻이 된다!
	[grade:number]: Score3;
}

const player1 : BaseballClub = {
  name: "otani",
  isPassed: true,
  position: "pitcher",
  height: 190,
  // backNumber:17,
  1: Score3.A //학년, 점수를 표현
  // 2:'A'//error
  ,
  grade: 0
}

player1.position = '투수';
player1['height'] = 100;

//교차 타입 : 두개 이상의 타입을 합치는 것
interface Toy {
  name : string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

type ToyCar = Toy & Car;
const toyCar: ToyCar ={
  name:"tayo",
  start(){
    console.log('출발');
  },
  color:'blue',
  price:50000,
}