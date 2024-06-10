import React,{useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { income,outcome } from "./store/MybankReducer";

export default function App4(){
  const money = useSelector((state)=>state.bank.money);
  const dispatch = useDispatch();
  const inputRef = useRef(0);

  const handleIncome = () =>{
    const value = parseInt(inputRef.current.value, 10);
    dispatch(income(value));
    inputRef.current.value = 0;
  }
  const handleOutcome = () =>{
    const value = parseInt(inputRef.current.value, 10);
    dispatch(outcome(value));
    inputRef.current.value = 0;
  }

  return(
    <>
      <h1>코딩온 은행</h1>
      <h3>잔액 : {money}원</h3>
      <input type="number" ref={inputRef} defaultValue={0}/>원
        <button onClick={handleIncome}>입금</button>
        <button onClick={handleOutcome}>출금</button>
    </>
  )
}