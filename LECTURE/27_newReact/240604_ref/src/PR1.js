import React, {Component} from "react";

class PR1 extends Component{
  myInput1 = React.createRef();
  myInput2 = React.createRef();

  state = {
    myData: []
  }

  handleData = () =>{
    if(this.myInput1.current.value === "") {
      this.myInput1.current.focus();
      return;
    }
    if(this.myInput2.current.value===""){
      this.myInput2.current.focus();
      return;
    }

    const newData = {
      id: this.state.myData.length+1,
      name : this.myInput1.current.value,
      title : this.myInput2.current.value
    }

    this.setState(prevState =>({
      myData : prevState.myData.concat(newData)
    }))
    console.log(this.myData);
    this.myInput1.current.value = '';
    this.myInput2.current.value = '';
    
  }

  render(){
    return(
      <>
        <h1>실습1</h1>
          <input type="text" placeholder="작성자" ref={this.myInput1}/>
          <input type="text" placeholder="제목" ref={this.myInput2}/>
          <button onClick={this.handleData}>추가하기</button>

          <br />

        <table border={2} width={500}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {this.state.myData.map((value)=>{
              return(
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.title}</td>
                  <td>{value.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </>
    )
  }
}


export default PR1;