import React,{useEffect} from "react";

export default function ApiRequestChild({Post,loading}){
    
  //마운트 시 발생하는 이벤트 지정
    useEffect(()=>{
      console.log('컴포넌트 마운트!');
      loading();
    },[])

  return(
    <>
    
      {Post.length === 0 ? <h3>loading...</h3> :
      <>
      <h3>Post List</h3>
      {
        Post.map((value)=>{
          return(
          <div className="contents" key={value.id}>
            <span className="contentTitleNum">NO.{value.id}</span><span className="contentTitle"> - {value.title}</span>
            <p>{value.body}</p>
          </div>
          )
        })
      }
      </>
      }
    </>
  );
}