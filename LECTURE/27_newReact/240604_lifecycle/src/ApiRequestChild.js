import React,{useEffect, useState} from "react";

export default function ApiRequestChild({fakePosts}){
    //마운트 시 발생하는 이벤트 지정
    const [Post, setPost] = useState([]);
    useEffect(()=>{
      console.log('컴포넌트 마운트!');
      setTimeout(()=>{
        setPost(fakePosts);
      },2000);
    },[])
  return(
    <>

    </>
  );
}