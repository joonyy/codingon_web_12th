import { useState } from "react";

export default function Counter(){
  const [number, setNumber] = useState(0);
  function increase(){
    setNumber(number + 1);
  }

  const alertMsg = (msg) =>{
    alert(msg);
  }

  const consoleMsg = (e, msg) =>{
    console.log('e : ', e);
    console.log('msg : ', msg);
  }

  return (
    <div>
      <h1>Function Counter</h1>
      <h2>{number}</h2>

      <button onClick={()=>{setNumber(number+1)}}>내가 만든 increase</button>

      {/* 함수에 인자가 없을 때는, 함수의 이름만 전달하면 된다! */}
      <button onClick={increase}>같이 만든 increase</button>
      
      {/* 함수에 인자가 있을 때는, 인자가 있는 함수를 익명함수로 감싸 처리하면 된다! */}
      <button onClick={()=>alertMsg("hello")}> alert 출력 </button>
      <button onClick={(e)=>consoleMsg(e, "hello")}> console 출력 </button>
    </div>
  )
}