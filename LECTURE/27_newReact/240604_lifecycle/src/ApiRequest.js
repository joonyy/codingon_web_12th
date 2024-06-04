import React,{useState} from "react";
import ApiRequestChild from './ApiRequestChild'
import axios from 'axios';

export default function ApiRequest(){
  const [posts,setPosts] = useState([]);
  async function getPosts(){
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response);
    }catch(err){
      console.error(err);
    }
  }
  return(
    <ApiRequestChild></ApiRequestChild>
  );
}