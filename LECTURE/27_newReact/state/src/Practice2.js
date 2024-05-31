import {useState} from 'react';

const Practice2 = () => {
  const [number,setNumber] = useState(0);
  const plus2 = () =>{
    setNumber(number+2);
  }
  const minus1 = () =>{
    setNumber(number-1);
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={plus2}>+2</button>
      <button onClick={minus1}>-1</button>
    </div>
  );
}

export default Practice2;
