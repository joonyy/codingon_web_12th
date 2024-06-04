import React, { Component } from "react";

export default class RefSample1 extends Component{
  handleFocus = () =>{
    console.log("this : ",this);
    console.log("this.myInput : ",this.myInput);
  }

  render(){
    return(
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
        {/* this를 찍어 변수를 만들어줘야 한다. */}
        <input 
          type="text" 
          ref={(ref) =>{
            // 만든 myInput이라는 변수에 해당 요소의 ref속성을 넘겨주는 것.
            this.myInput = ref;
          }} 
        />
        <button onClick={this.handleFocus}>Focus</button>
      </>
    )
  }
}