import {Component} from 'react';
import PropTypes from 'prop-types';

//1. class 컴포넌트에는 반드시 render 함수가 들어가야 한다.
class ClassComponent extends Component {
  render() {
    const {name, children} = this.props;
    return(
    <div>
      <h1>Hi {name}!</h1>
      <h2>{children}</h2>
      <div>여기는 Class Component</div>
    </div>
    )
  }
}

ClassComponent.propTypes = {
  //string인 name이 필수값으로 들어와야 한다!! 라는뜻
  name: PropTypes.string.isRequired
}

export default ClassComponent;