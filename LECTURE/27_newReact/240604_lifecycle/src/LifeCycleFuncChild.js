import React, { useEffect, useState } from 'react';

export default function LifeCycleFuncChild({number}){
  const [input, setInput] = useState("");
  //Mount 시점에 실행
  useEffect(()=>{
    console.log('컴포넌트 마운트!');
  },[])

  //unMount 시점에 실행
  useEffect(()=>{
    return () =>{
      console.log('컴포넌트 언마운트.');
    }
  },[]);

  //mount 혹은 update 시점에 실행(모든 경우)
  useEffect(()=>{
    console.log('마운트 or 업데이트!');
  })

  //input 상태가 업데이트 될 때 실행한다.
  useEffect(()=>{
    console.log("input상태가 업데이트 되었다!");
  },[input])

  return(
    <div>
      <div>현재 number 값은 {number}</div>
      <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
    </div>
  )
}