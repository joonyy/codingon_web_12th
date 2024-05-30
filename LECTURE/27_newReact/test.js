
//호이스팅
test1();
function test1(){ 
  //명시적 함수선언의 경우는,
  //function이 가장 위
  console.log('test1 함수입니다!');
}
test1();

//익명함수 : 변수선언방식
const test2 = () =>{
  console.log('test2 함수입니다!');
}

test2();