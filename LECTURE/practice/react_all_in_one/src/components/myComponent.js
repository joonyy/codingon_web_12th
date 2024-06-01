import {useState} from 'react';

export default function TextEx(){

  const [imgSrc, setimgSrc] = useState("/apple.png")
  const [text, setText] = useState('');
  const [textColor, setTextColor]=useState('black');
  const [textBackground, setTextBackground] = useState('white');

  function handleFruit(e){
    setimgSrc('./' + e.target.value+'.png');
  }

  function handleBackground(e){
    setTextBackground(e.target.value);
  }

  function handleColor(e){
    setTextColor(e.target.value);
  }
  
  return(
    <div>
    과일 :<select onChange={handleFruit}>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="peach">복숭아</option>
          <option value="orange">오렌지</option>
        </select>
    배경색 : <select onChange={handleBackground}>
          <option value="white">하양</option>
          <option value="black">검정</option>
          <option value="red">빨강</option>
          <option value="orange">주황</option>
          <option value="yellow">노랑</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="purple">보라</option>
          <option value="pink">분홍</option>
        </select>

    글자색 : <select onChange={handleColor}>
          <option value="black">검정</option>
          <option value="white">하양</option>
          <option value="red">빨강</option>
          <option value="orange">주황</option>
          <option value="yellow">노랑</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="purple">보라</option>
          <option value="pink">분홍</option>
        </select>

    <br />
    내용 : <input onChange={(e)=>{setText(e.target.value)}}></input>
    <br />
    <img src={imgSrc} alt="이미지" style={{width:100, height:100}}/>
    <br />
    <span style={{backgroundColor:textBackground, color:textColor, width:100, fontSize:30} }>{text}</span>

    </div>
  )    
}