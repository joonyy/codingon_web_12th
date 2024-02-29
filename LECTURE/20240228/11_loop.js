/**
 * 반복문 : 무엇을 얼마나 반복해야 하는지 인수로 받는다.
 * for(변수를 통해 몇번 반복할지 결정){
 *  반복할 코드;
 * }
 * 

for(let i=10;i>0; i--)  console.log(i, '🤬');
 */

for(let i=0;i<10;i++){
  if(i%2 == 0){
    console.log(i);
  }
}
for(let i=0;i<10;i++){
  if(i%2 == 1){
    console.log(i);
  }
}

//0~50사이 3의 배수 출력

for(let i=0;i<=50;i++){
  if(i%3 === 0 && i!==0) console.log(i);
}

/*
while문 while(조건){코드}
*/
let j=0;
while(j<5){
  console.log(j);
  j++;//조건을 변경하는 내용을 넣어줘야 함.
}
/*
  do-while문 : do가 무조건 한번 실행됨
*/
// do{
//   code;
// }
// while(j<5){

// }

//for ~ in ~ , 조건에 들어간 i 는 순서, 내용을 배열[i]
// const foods = ['🍨','🍘','🥙'];
// for(let i in foods)
//   console.log(i, ':',dish[i]);


//-----for~of~-------/

const foods = ['🍨','🍘','🥙'];
for(let food of foods)
  console.log(food);