function FunctionComponent(){
  //return ReactNode
  const age = 20;
  console.log([1,2,3,4].map = (a) => a+1);
  const style = {
  color : 'red',
  fontSize: ''
  }
  
  //return문 내부에서만 {/* 이렇게 쓰면 된다! */}
  return<>
    <h1 style={style}
    onClick ={()=>console.log('hi')}>함수형 컴포넌트입니다.</h1>
    <br />
    <p className="pClass">
      {/* 1. 조건문 사용법 */}
      {/* 삼항연산자 사용하기 */}
      {age >= 20 ?"성인입니다.":"미성년자입니다."}
      {/* 함수 사용하기(메소드 정의) */}
      <br />
      {checkAge(age)}
    </p>
    </>

    function checkAge(age) {
      if(age>20) return "20세 초과";
      else return "미성년자";
    }
}

export default FunctionComponent;

//<FunctionCmponent>