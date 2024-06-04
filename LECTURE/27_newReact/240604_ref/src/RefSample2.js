import React, {Component} from "react";

export default class Refsample2 extends Component {

  myInput = React.createRef();

  handleFocus = () =>{
    //createRef를 이용한 변수는 설정한 DOM에 접근하기 위해서 this.myInput.current까지  적어줘야 함.
    this.myInput.current.handleFocus();
  }
  render(){
    return(
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
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