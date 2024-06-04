import React,{useRef,useState} from "react";

export default function RefSample4(){
  const idRef = useRef(1);
  const [id, setId] = useState(10);

  const plusIdRef = () =>{
    idRef.current += 1;
    console.log("idRef.current : ",idRef.current);
  }

  const plusIdState = () =>{
    setId(id+1);
  }

  return (

    <div>
      <h3>RefSample4</h3>
      <h4>{idRef.current}</h4> 
      {/* 불필요한 렌더링이 발생하지 않되, 값은 변경해야 하는 경우에 사용한다! */}
      {/* 변수와 다른점 : 아무리 기존 변수의 값이 바뀌어도, 리렌더링되지 않는다. */}
      <button onClick={plusIdRef}> Plus Ref </button>
      <h4>{id}</h4>
      <button onClick={plusIdState}>Plus State</button>
    </div>
  )
}
