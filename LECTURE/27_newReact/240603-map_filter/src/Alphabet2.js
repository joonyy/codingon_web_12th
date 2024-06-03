import React,{ useState } from "react";

export default function Alphabet2(){

const [alphabet, setAlphabet] = useState([
  {
    id:1,
    txt:'a'
  },
  {
    id:2,
    txt:'p'
  },
  {
    id:3,
    txt:'p'
  },
  {
    id:4,
    txt:'l'
  },
  {
    id:5,
    txt:'e'
  }
]);

const [inputAlpha, setInputAlpha] = useState('');

const addAlpha = () =>{
  //[퀴즈] input 태그의 값이 빈값이라면, alphabet의 상태가 변경되지 않도록!
  if(inputAlpha.trim().length === 0) return;
  
  //alphabet 배열에 값을 추가한다!
  const newAlpha = alphabet.concat({
    id:alphabet + 1,
    txt : inputAlpha,
  })
  setAlphabet(newAlpha);
  setInputAlpha(" ");
}

const deleteAlpha = (targetId) =>{
  const newAlpha = alphabet.filter((element)=>{
    return element.id !==targetId;
  });
  setAlphabet(newAlpha);
}

  return(
    <div>
      <h1>alphabet2</h1>
      {/* 사용자에게 입력받아 배열에 추가하기 */}
      <input type="text" placeholder="알파벳 입력" value={inputAlpha} onChange={(e)=>{
        setInputAlpha(e.target.value);
      }} />
      <button onClick={addAlpha}>Add</button>

      {alphabet.map((value)=>{
        return <li key={value.id} onDoubleClick={()=> deleteAlpha(value.id)}>{value.txt}</li>
      })}
      
      {/* 단축평가 */}
      {alphabet.length === 0 && <div style={{fontSize:20, fontStyle:"italic"}}>알파벳을 입력해주세요!</div>}
      
      {/* 기본 값을 설정하고 싶을 떄 사용하기 편리하다! */}
      {null||<div>값이 정의되지 않았어요!</div>} 
      
      {/* 삼항연산자 */}
      {alphabet.length !== 0 ? (
        alphabet.map((value) => (
          <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
            {value.txt}
          </li>
        ))
      ) : (
        <div>빈 배열입니다!</div>
      )}
    </div>
  )

}