import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import FunctionProps from './FunctionProps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ClassComponent />
    <FunctionComponent />

{/* 키로 name을 줄 수 있다. */}
    {/* <FunctionProps name ="1번 컴포넌트" lunch="낙지덮밥"/>
    <FunctionProps name="2번 컴포넌트"/>
    <FunctionProps name="3번 컴포넌트"/> */}
    {/* 위 내용과 완전히 같은 것은? */}
    {[1,2,3].map((e) =><FunctionProps key={`abc_${e}`}name={`${e}번 컴포넌트`}/>)}
  </>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
