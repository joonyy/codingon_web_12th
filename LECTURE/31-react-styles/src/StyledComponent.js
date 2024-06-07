import React from 'react';
import styled from 'styled-components';

//CSS IN JS : js 안에 바로 css를 작성한다.
//styled-components, emotion, syled-jsx 등등의 툴도 있다!
//각 컴포넌트마다 격리된 스타일 적용가능!

const StyledContainer = styled.div`
  display:flex;
`;

const StyledBox = styled.div`
  width:100px;
  height:100px;
  background-color: ${(props)=>props.$bgColor || 'blue'};

  &:hover{
    transform : translateY(-20px);
  }
`;

const StyledComponent = () => {
  return (
    <StyledContainer>
      <StyledBox $bgColor="red" />
      <StyledBox $bgColor= "green" />
      <StyledBox $bgColor="blue" />
    </StyledContainer>
  );
}

export default StyledComponent;
