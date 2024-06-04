import {useState} from 'react';

const SayFunction = () =>{
  console.log(useState('welcome!'));
  const [message, setMessage] = useState("welcome!");
  //useState(초기값)
  //message : 메시지 상태  => state 변수
  //setMessage : message state 값을 바꾸는 함수
  const onClickEnter =() =>{
    setMessage("안녕하세요~");
  }
  const onClickLeave = () =>{
    setMessage("안녕히가세요~");
  }
  
  return (
  // *React에서는 함수 호출 시 괄호없이 한다.
  // *html의 경우, onclick="onClickEnter()"의 문자열 형태로 호출문을 등록 해놓았으나,
  // *JS의 경우 addEventListener('click', onClickEnter); -> 괄호를 붙여버리면 호출등록 과정에서 바로 실행이 되어버린다!
  //그러므로, ()는 붙이지 말 것.
    //React; onClick ={onClickEnter()} 시 무한루프가 돌아버린다. -> 

    <div>
      <h1>{message}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
    </div>
  )  
}

export default SayFunction;