import { useState } from "react";

export default function useToggle(initValue = false){
  //value : toggle의 상태. true, false 두 가지 값을 사용할 것이다.
  //setValue 
  //우리가 만들려는 기능에 필요해서 useState를 넣어준 것 뿐이다! 필수는 아니다.
  const [value, setValue] = useState(initValue);

  const toggleValue = () =>{
    setValue(!value);
  }
  return [value, toggleValue];
}