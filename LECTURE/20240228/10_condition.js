/*
  @조건문 : 주어진 조건에 따라 true, false 일 때에 각각 다른 코드를 실행하게 한다.
  
  *기본형식 :
  if(조건식) 한줄코드;

  if(조건식){
    여러줄 코드;
  }

if(조건){
  조건에 만족하면 여기 실행
}else{
  조건에 만족하지 않으면 여기 실행
}

if(조건1){
  code;
}else if(다른 조건){
  조건 1 불만족시 실행할 code;
}else{
  나머지 ㄱㄱ.
}
*/
let hour = 14;
if(hour >= 6 && hour<12){
  console.log("good morning");
  console.log("오전시간입니다.");
}else if(hour>=12 && hour<18){
  console.log("오후시간입니다.");
}else console.log("저녁시간입니다.");

/* 
  switch문 -> 조건인 변수의 내용 조건은 안된다. 머란
  switch(변수)
  case : 코드; break;
  case : 코드; break; 
  case : 코드; break;
  ...
  default : 코드; 
*/
let role = "";
switch(role){
  case "guest" : 
    console.log('당신은 게스트입니다.');
    break;
  case "master" : 
    console.log('당신은 마스터입니다.');
    break;
  case "owner": 
    console.log('당신은 오너입니다.');
    break;
  default : 
    console.log("누구신가용??")
}

// 문제 : switch문을 if문으로 바꿔 실행해보세요

if(role == "guest"){
  console.log('당신은 게스트입니다.');
}else if(role ==="master"){
  console.log('당신은 마스터입니다.');
}else{
  console.log("누구세요??");
}

//