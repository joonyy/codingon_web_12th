import React from 'react';
import PropTypes from 'prop-types';

//props : properties
function FunctionProps({name="이름",lunch = "편의점 김밥"}){
  // json 형태로 전달된다!
  return<>
    <p>{name}</p>
    <p>{lunch}</p>
  </>
}

export default FunctionProps;

//이 경우, defaultProps는 잘 쓰지 않습니다!
//->대신, 요즘은 parameter에 직접 default값을 쓰는게 낫다.