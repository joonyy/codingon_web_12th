import React from "react";

export default function Alphabet(){
  const list = ['a','b','c','d','e'];
  const items = list.map((txt,index,arr)=>{
    console.log('txt : ',txt);
    console.log('index : ',index);
    console.log('arr : ',arr);
    return txt + index;
  });
  console.log(items);
  return(
    <div>
      <h1>alphabet</h1>
      <ol>
        {list.map((value,index)=>{
          return <li key={index}>{value}</li>
          // map 내 최상위에 감싸고 있는 태그에 index를 넣어주면 된다!!!
        })}
      </ol>
    </div>
  )
}