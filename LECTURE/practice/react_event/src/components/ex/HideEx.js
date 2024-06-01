import {useState} from 'react';

export default function HideEx(){
  const [style, setstyle] = useState({});
  const [text, settext] = useState("사라져라!");
  const toggle = () =>{
    if(text==="사라져라!"){
      setstyle({display:"none"});
      settext("보여라!");
    }else{
      setstyle({});
      settext("사라져라!");
    }
  }
  return(
    <>
      <button onClick={toggle}>{text}</button>
      <h1 style={style}>안녕하세요</h1>
    </>
  )
}