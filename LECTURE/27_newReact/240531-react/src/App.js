import './App.css';
import FunctionComponent from './FunctionComponent.js';
import ClassComponent from './ClassComponent.js';

function App() {
  return (
    <div className="App">
    <FunctionComponent name="함수 코딩온">저는 첫 번째 component의 props.children입니다.</FunctionComponent>
    <FunctionComponent name={1234}> 저는 1234의 props.children입니다.</FunctionComponent>
    <hr />
    <ClassComponent>나는 classComponent의 props.children입니다.</ClassComponent>
    </div>

  );
}

export default App;
