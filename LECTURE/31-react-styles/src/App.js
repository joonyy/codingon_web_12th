import LarvaComponentPR from './LarvaComponentPR';
import MixinComponentPR from './MixinComponentPR';
import PostList from './PostList.js';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent.js';
import './styles/PostList.scss';


function App() {
  return (
    <div className="App">
      {/* <h1>React Styling</h1>

      <h2>CSS Module</h2>
      <CssModuleComponent/>

      <br />
      <hr />
      <SassComponent />

      <br />
      <hr /> 
      <LarvaComponentPR />
      <MixinComponentPR />
       <PostList /> */}
      <h2>Styled Component</h2>
      <StyledComponent/>
    </div>
  );
}

export default App;
