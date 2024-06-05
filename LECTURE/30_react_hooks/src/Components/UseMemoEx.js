import {useState,useMemo} from 'react';

export default function UseMemoEx(){
  const [count,setCount] = useState(0);
  const [input, setInput] = useState("");

  //[Before] 
  // const calc = () =>{
  //   console.log("열심히 계산중~!");
  //   for(let i = 0; i< 10000000; i++){}
  //   return count ** 2;
  // }
  
  //[after]
  //count의 값이 바뀔 때에만 함수를 실행하겠다!
  //input의 값이 바뀌면, 컴포넌트는 리렌더링이 되지만, calc 연산이 일어나지 않는다!
  const calc = useMemo(() =>{
    console.log("열심히 계산중~!");
    for(let i = 0; i< 10000000; i++){}
    return count ** 2;
  },[count]) 
  //calc의 type은 이제 변수.

  return(
    <div>
      <h1>UseMemoEx</h1>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={()=>setCount(count+1)}>plus</button>
      <p>count : {count}</p>

      {/* [before] */}
      {/* <p>calc: {calc()}</p> */}

      {/* [after] */}
      <p>calc: {calc}</p>
    </div>
  )
}