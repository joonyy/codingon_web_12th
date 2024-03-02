/**
 * 사용자 부주의로 입력이 제대로 이루어지지 않았을 때를 대비하여 default 값을 지정한다.
 */
/*
function bank(deposit, rate, year){
  return deposit*rate/100 * year;
}
console.log(bank(1000,3.5,5));
//console.log(bank(3.5,5));//NaN 에러

function bank_default(deposit, rate=3, year=5){
  return deposit*rate/100 * year;
}

console.log(bank_default(1000));//인자가 비어있어도, 디폴트값이 들어간다.
*/
//-------------------------------------------//

/*
function printAll(...args){
  // for(let i = 0 ;i<args.length; i++){
  //   console.log(args[i]); //i번째, index
  // }
  for(let item of args){
    console.log(`전달된 매개변수의 값은 ${item}`);
  }
}

printAll('html','css','js', 'node.js');


function printAll(...args){
  for(arg of args){
    console.log(`1. of를 통해 전달받은 매개변수는 ${arg}입니다.`);
  }
  for(i in args){
    console.log(`2. in을 통해 전달받은 index로 받아온 값은 ${args[i]}입니다.`);
  }
}
printAll('html','css','javascript','node.js');
*/
/*
for(let i=1;i<6;i++){
  for(let j = 5; j>=i;j--){
    document.write('🏀');
  }
  document.write('<br>');//줄바꿈
}
*/
/**
 * 자동실행함수 형식
 * ()()
 */
// (function(){
//   console.log('자동실행');
// })(); 

//자동 함수의 두번째 괄호에 넣는다!
(function(a,b){
  console.log(a+b);
})(2,1); 
