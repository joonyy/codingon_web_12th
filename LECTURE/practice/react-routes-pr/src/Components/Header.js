import React from "react";
import { Link } from "react-router-dom";

export default function Header(){

  return(
    <>
      <div style={{display:"flex"}}>
        <h1 ><Link to={'/'}>ReactRouter 실습</Link></h1>
        <ul style={{display:"flex", listStyle:"none"}}>
          <li style={{marginRight:20}}><Link to={`/student/kdt`}>학생 KDT </Link></li>
          <li style={{marginRight:20}}><Link to={`/student/codingon`}>코딩온 </Link></li>
          <li><Link to={`/student/new?name=kdt3rd`}>SearchParams </Link></li>
        </ul>
      </div>
    </>
  )
}