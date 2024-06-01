import {useState} from 'react';

export default function ColorEx(){
const [textInfo, changeTextInfo] = useState({
  color:'black',
  text:'검정색'
})

const handleText = (color, e) =>{
  changeTextInfo({color:color, text:e.target.innerText});
}

  return(
    <div>
      <h1 style={{color:textInfo.color, fontSize:40}}> {textInfo.text} 글씨 </h1>
      <button onClick={(e) => handleText('blue', e)}>파란색</button>
      <button onClick={(e) => handleText('red',e)}>빨간색</button>
    </div>
  )
}