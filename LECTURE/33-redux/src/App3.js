import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App3(){
  // const [number, setNumber] = useState(0); 원래 state 관리

  //store에 있는 상태를 가져오기
  const isVisible = useSelector((state) =>state.isVisible);
  return (
  <div>
    <h1>React Redux Ex</h1>
    <h2>isVisible값은 {isVisible?"참":"거짓"}이다</h2>
    <Box1/>
  </div>
  )
}

const Box1 = () =>{
  return(
    <div>
      <Box2/>
    </div>
  )
}

const Box2 = () =>{
  return(
    <div>
      <Box3/>
    </div>
  )
}


const Box3 = () =>{
  return(
    <div>
      <Box4/>
    </div>
  )
}

const Box4 = () =>{
  const dispatch = useDispatch();
  return(
    <div>
      {/* <button onClick={()=>dispatch({type:'PLUS'})}>더하기</button>
      <button onClick={()=>dispatch({type:'MINUS'})}>빼기</button> */}
      <button onClick={()=>{dispatch({type:"CHANGE"})}}>Change</button>
    </div>
  )
}
