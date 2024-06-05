import React,{useState, useCallback} from 'react';

export default function useCallbackEx(){
  const [text,setText] = useState("");

  //[before]
  // const onChangeText = (e) =>{
  //   setText(e.target.value);
  // }

  //[after]
  //컴포넌트가 리렌더링 되어도, 의존성 배열에 있는 값이 바뀌지 않는 한 기존 값 유지.
  const onChangeText = useCallback((e) =>{
    setText(e.target.value);
  },[]);

  return(
    <div>
      <h1>UseCallbackEx</h1>
      <input type="text" onChange={onChangeText} />
      <div>내가 작성한 값은 : {text || '없음'}</div>
    </div>
  )
}

