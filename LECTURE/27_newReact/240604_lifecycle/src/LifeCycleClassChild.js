import React, {Component} from 'react';

export default class LifeCycleClassChild extends Component{
  // 이 이름을 가진 메서드는 마운트될 때 자동실행됩니다! => 선언 등이 필요없음
  componentDidMount() {
    console.log("컴포넌트 마운트!!");
  }
  componentDidUpdate(){
    console.log('컴포넌트 업데이트!!');
  }
  componentWillUnmount(){
    console.log('컴포넌트 언마운트!!');
  }

  render(){
    return <div>현재 number값은 {this.props.number}</div>
    
  }
}