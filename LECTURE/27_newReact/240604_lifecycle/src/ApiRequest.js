import React,{useState} from "react";
import ApiRequestChild from './ApiRequestChild'
import axios from 'axios';

export default function ApiRequest(){

  const [Post,setPost] = useState([]);
  const loading = () =>{
    setTimeout(()=>{
      getPosts()
    },2000);
  }

  async function getPosts(){
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPost(response.data.slice(0,10));
    }catch(err){
      console.error(err);
    }
  }
  return(
    <ApiRequestChild Post={Post} loading={loading}></ApiRequestChild>
  );
}