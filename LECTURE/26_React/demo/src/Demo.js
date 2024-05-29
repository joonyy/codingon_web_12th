import './App.css';

function App(){
  const title = 50;
  const name = "Mr.Kim";
  const name1 = "roy";
  const animal1 = "강아지";
    return(//최상단 노드에는 하나의 노드만 있어야 한다. 현재 경우에는 div가 최상단.
    //아래 JSX 파일의 경우에는 class라고 작성할 시에 실제 css 파일의 class와 겹치는 문제가 발생, className을 활용할 것.
      <div className='App'>
    {/* jsx 문법 */}
    {/* 1. 하나의 요소로 감싸인 요소
    2. 자바스크립트 표현식 사용가능! */}
    {/* {중괄호}로 감싸면 자바스크립트 사용가능.
      중괄호 내부에서는 if, for문 사용불가, 삼항연산자로 사용해야 한다.*/}

    <div> {name}님 안녕하세요~ </div>
    <div>{name1==="roy"?"강아지입니다":"잘못 아셨네요"}</div>
    <p> {title} | Likes </p>
    <p> 제 반려견의 이름은 {name1}입니다 </p>
    </div>

      
    )

}


export default App;