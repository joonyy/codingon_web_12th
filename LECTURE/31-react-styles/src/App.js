import CssModuleComponent from './CssModuleComponent';
import SassComponent from './SassComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>

      <h2>CSS Module</h2>
      <CssModuleComponent/>

      <br />
      <hr />
      <SassComponent />
    </div>
  );
}

export default App;
