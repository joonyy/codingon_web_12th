import {Component} from 'react';

class Practice1 extends Component{

  state = {
    number : 0,
  }
  render(){
    const {number} = this.state; // number은 state의 number 변수임
    const increase1 = ()=>{
      this.setState({number : number-1});
    }
    const increase2 = ()=>{
      this.setState({number: number+2});
    }
    return(
      <div>
        <h1>{number}</h1>
        <button onClick={increase2}> +2 </button>
        <button onClick={increase1}> -1 </button>
      </div>
    )
  }
}

export default Practice1;