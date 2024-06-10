import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(100);
  const plus = () => setNumber(number+1);
  const minus = () => setNumber(number-1);

  return (
    <div className="App">
      <h1>React Redux 사용 전</h1>
      <Box1 number={number} plus={plus} minus={minus} />
    </div>
  );
}

const Box1 = ({number,plus,minus}) =>{
  return(
    <div>
      <h2>Box1 : {number}</h2>
      <Box2 number={number} plus={plus} minus={minus} />
    </div>
  )
}

const Box2 = ({number,plus,minus}) =>{
  return(
    <div>
      <h2>Box1 : {number}</h2>
      <Box3 number={number} plus={plus} minus={minus} />
    </div>
  )
}


const Box3 = ({number,plus,minus}) =>{
  return(
    <div>
      <h2>Box1 : {number}</h2>
      <Box4 number={number} plus={plus} minus={minus} />
    </div>
  )
}

const Box4 = ({number,plus,minus}) =>{
  return(
    <div>
      <h2>Box1 : {number}</h2>
      <button onClick={plus}>더하기</button>
      <button onClick={minus}>빼기</button>
    </div>
  )
}

export default App;
