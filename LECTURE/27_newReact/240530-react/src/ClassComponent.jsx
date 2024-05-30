//js : jsx 문법을 쓰지 못해, html 안에서 변수 사용 불가.

import { Component } from "react";

class ClassComponent extends Component{
  render(){
    const a = '클래스 컴포넌트입니다.';
    return <h1>{a}</h1>
  }
}

export default ClassComponent;