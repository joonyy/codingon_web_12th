import {Component} from 'react';

class ClassBind extends Component{
  //필드(속성)

  state = {
    name:"codingon"
  }

  //클래스 컴포넌트에서 이벤트 쓰기 - 화살표 함수.
  //인자가 없는 경우
  printConsole = () =>{
    console.log('this', this) //현재 컴포넌트
    console.log('printConsole', this.state);//현재 컴포넌트의 state
  }

  //인자를 전달하는 경우
  printConsole2=(msg) =>{
    console.log(msg);
  }

  //인자가 두 개
  printConsole3=(e, msg) =>{
    console.log(e);
    console.log(msg);
  }

  render(){

    return(
      <>
      <h1>Class Component입니다.</h1>
      <button onClick={this.printConsole}>PrintConsole(인자X)</button>
      <button onClick={() => this.printConsole2('안녕하세요')}>
        PrintConsole2(인자O)
      </button>
      <button onClick={(e)=>this.printConsole3(e,'안녕하세요')}>PrintConsole3(인자O,2개)</button>
      </>
    )
  } 
}

export default ClassBind;