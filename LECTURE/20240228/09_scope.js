/*
@SCOPE : scope는 범위라는 뜻으로, { }로 표현합니다.
- 스코프 안에 선언된 변수는 스코프를 벗어나면 소멸한다.
- 
*/

{
  const msg = 'Hello'; //const는 블록스코프를 가진다.
  console.log(msg);
}
// console.log(msg);

//var는 함수스코프를 가진다.
function showAge(){
  var age = 20;
  console.log(age);
}

showAge();