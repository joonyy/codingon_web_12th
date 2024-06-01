import {useState} from 'react';

export default function ColorEx(){
const [style, setStyle] = useState({});
const [text, setText] = useState('검정');

const toRed = () =>{
  setText('빨간')
  setStyle({color:"red"});
}

const toBlue = () =>{
  setText('파란');
  setStyle({color:"blue"});
}

  return(
    <div>
      <h1 style={style}> {text}색 글씨 </h1>
      <button onClick={()=>{toBlue()}}>파란색</button>
      <button onClick={()=>{toRed()}}>빨간색</button>
    </div>
  )
}