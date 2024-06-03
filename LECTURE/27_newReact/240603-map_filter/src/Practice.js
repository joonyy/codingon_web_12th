import React from 'react';
import { useState } from 'react';

export default function Practice(){
  const [text, setText] = useState('사라져라!');
  const [hello, setHello] = useState('안녕하세요!');

  const ChangeState = () =>{
    return text==='사라져라!'?(
      setText('보여라!'),
      setHello('')
    ):(
      setText('사라져라!'),
      setHello("안녕하세요!")
    )
  }

  return(
    <div>
      <button onClick={ChangeState}>{text}</button>
      <h1>{hello}</h1>
    </div>
  )
}