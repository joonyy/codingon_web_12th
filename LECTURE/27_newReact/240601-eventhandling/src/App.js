import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter.js';
function App() {
  return (
    <div className="App">
      <SyntheticEvent/>
      <hr />
      <ClassBind/>
      <br />
      <hr />
      <Counter></Counter>
    </div>
  );
}

export default App;
