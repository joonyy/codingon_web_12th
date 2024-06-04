import React, {Component} from 'react';

class Counter extends Component {

  state={
    number : 0,
  }

  render(){
    const {number} = this.state;
    return <div>
      <h1>{number}</h1>
      <button 
      onClick={() =>{
        //this.setState를 통해서만 state의 값을 직접 변경할 수 있다!
        this.setState({number: 1})
      }}>=1</button>

      <button onClick={()=>{
        this.setState({number : number +1})
      }}> 진짜 +1</button>

      <button 
        onClick={()=>{
          this.setState((prevState)=>{
            return{
              number: prevState.number + 2
            }
        })
      }}>+2</button>
    </div>
  }
}

export default Counter;