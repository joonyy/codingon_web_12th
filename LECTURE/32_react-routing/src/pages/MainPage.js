import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MainPage(){
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('mode'));// null or dark!
  // / =>null
  // /?mode=dark => dark
  //다크모드를 만들 때 , class를 주어 색을 바꿔줄 수 있다!
  return(
    <div className={['Main', searchParams.get('mode')].join(' ')}>
      <h1>Home</h1>
      <button onClick={()=>setSearchParams({mode:'dark'})}>
        DarkMode
      </button>
    </div>
  )
}
