import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {minus, plus} from './store/counterReducer';


export default function App2(){
  // const [number, setNumber] = useState(0); 원래 state 관리

  //store에 있는 상태를 가져오기
  const number = useSelector((state) =>{
    return state.counter.number;
  });
  return (
  <div>
    <h1>React Redux Ex</h1>
    <h2>number : {number}</h2>
    <Box1></Box1>
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
      <button onClick={()=>dispatch(plus())}>더하기</button>
      <button onClick={()=>dispatch(minus())}>빼기</button>
    </div>
  )
}
