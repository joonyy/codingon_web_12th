import React, { useState } from 'react';

interface StudentInfo{
  name: string;
  grade: number;
  part?: string;// optional
  handleClick: (name:string, grade:number, score:number) => void;
}

export default function Student({name,grade,part, handleClick}:StudentInfo){
  const [score, setScore] = useState(0);

  return(
    <div>
      
      <ul onClick={() => handleClick(name,grade,score)}>
        <li>이름 : {name}</li>
        <li>학년 : {grade}</li>
        <li>전공 : {part || '자유 전공'}</li>
        <li><input type="number" value={score} onChange={(e)=>{setScore(Number(e.target.value))}} /></li>
      </ul>
    </div>
  )
}