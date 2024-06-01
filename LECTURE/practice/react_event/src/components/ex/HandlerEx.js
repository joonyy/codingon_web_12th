import {Component} from 'react';

class HandlerEx extends Component {
  state ={
    text:"Hello World!"
  }
  render(){

    return(
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={() =>{this.setState({text:"Goodbye World!"})}}>클릭!</button>
      </div>
    )
  }
}

export default HandlerEx;