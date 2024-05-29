import './App.css'

function App(){
  const a=10;
  const b=20;
  const user = {name:"hong", age:29};
  const mystyle = {
    backgroundColor :"gold",
    color:"red",
    fontSize:"25px"
  }
  return (
    <div className="App">
      {3+5}
      <p> <span> span 태그입니다.</span></p>
      <p>{"문자열 허용"}</p>
      <p>{a<b &&'a가 b보다 더 크다'}</p> 
      <p>{a<b &&'이곳에 디폴트값을 지정하여 실행한다'}</p> 
      {/* 사용자 입력값에 따라 변하는 UI를 만들 때 활용하는 방법. */}
      <p>{Math.floor(Math.random()*10)}</p> 
      <p>{user.age}</p>
      <div style={mystyle}>
        아이디 : <input type="text" /> <br/>
        비밀번호 : <input type="password"/>
      </div>
      <div className="title">
        아이디 : <input type="text" /> <br/>
        비밀번호 : <input type="password"/>
      </div>
    </div>
  );
}

export default App;