import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';

function UseCallbackEx2({postId}) { 
  
  const [post,setPost] = useState({});


  //[before]
  // const getPost = async () => {
  //   console.log('data fetching...');
  //   const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  //   setPost(res.data);
  // };

  //[after]
  //useCallback 훅으로 메모이제이션을 한다. => 의존성 배열에 postId를 넣어준다.
  const getPost = useCallback(async () => {
    console.log('data fetching...');
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    setPost(res.data);
  },[postId]);

  //의존성 배열에 "함수"를 넣으면
  //컴포넌트 리렌더링 => 함수 재생성(주소값 변경(포인터)) => getPost 호출
  useEffect(()=>{
    getPost();
  },[getPost])

  return (
    <div>
      <h1>UseCallbackEx2</h1>   
    
      <p>{post.id?post.title:'loading...'}</p>
    </div>
  )
}

export default UseCallbackEx2
