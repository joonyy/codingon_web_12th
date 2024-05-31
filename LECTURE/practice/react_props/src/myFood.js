import React from 'react';

export default function myFood({food="제육덮밥", children}){
  return(
    <div>
    <h2>
      <span style={{color:"red"}}>{food}</span>
      를 소개합니다!</h2>
      <p>
      <span style={{color:"red"}}>{food}</span>는 {children}.
      </p>
    </div>
  )
}