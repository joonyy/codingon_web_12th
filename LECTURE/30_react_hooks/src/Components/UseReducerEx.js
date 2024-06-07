import React,{useReducer} from "react";

//다른 파일이 있다고 가정(외부로 로직 빼기)
const initState = {value : 0}; //초기 상태값

const reducer = (prevState, action) =>{
  //action의 형태는 우리가 정의하기 나름임.
  console.log(action);
  switch(action.type){
    case 'INCREMENT' : 
      // return prevState + 1;
      return {value : prevState.value + 1};
    case "DECREMENT" :
      // return prevState - 1;
      return {value : prevState.value -1};
    case "RESET" :
      // return initState;
      return {value : initState.value};
    default:
      return {value : prevState.value};
  }
}


export default function UseReducerEx(){
  // reducer : state를 업데이트 하는 함수
  // dispatch : 액션(state가 어떻게 변경되어야 하는지에 대한 힌트!)을 발생시키는 함수!
  // state : 현재 상태.
  // useReducer는 [state,dispatch]를 return한다.

  const [state,dispatch] = useReducer(reducer, initState);

  // const increment = () => dispatch("INCREMENT");
  // const decrement = () => dispatch("DECREMENT");
  // const reset = () => dispatch("RESET");

  const increment = () => dispatch({type:"INCREMENT", input:"~~"}); //이와 같이 다른 정보도 같이 넘겨 줄 수 있음!
  const decrement = () => dispatch({type:"DECREMENT"});
  const reset = () => dispatch({type:"RESET"});

  return(
    <div>
      <h1>UseReducerEx</h1>
      <h2>{state.value}</h2>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}