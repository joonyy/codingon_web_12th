//함수형 컴포넌트 예제
import React, {useRef} from "react";

export default function RefSample3(){
  //1. ref 객체 만들기
    const inputRef = useRef();

    const handleFocus = () =>{
      inputRef.current.focus();
    }
    return(
      <>
        <p>(함수형 컴포넌트) 버튼 클릭 시 input에 포커스 처리</p>
        {/* 선택하고 싶은 DOM 요소에 ref prop 설정해주기 */}
        <input type="text" ref={inputRef} />
        <button onClick={handleFocus}>focus</button>
      </>
    )

}