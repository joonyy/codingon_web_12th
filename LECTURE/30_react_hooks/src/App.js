import './App.css';
import UseMemoEx from './Components/UseMemoEx';
import UseCallbackEx from './Components/UseCallbackEx';
import UseCallbackEx2 from './Components/UseCallbackEx2';
import {useState} from 'react';
import UseMemoPr from './Components/UseMemoPr';
import UseCallbackPr from './Components/UseCallbackPr';
import UseReducerEx from './Components/UseReducerEx';
import Faq from './Components/Faq';
import Form from './Components/react-hook-form/Form';

function App() {
  // const [postId, setpostId] = useState(3);
  return (
    <div className="App">
      {/* <UseMemoEx/>
      <br />
      <hr />
      <UseCallbackEx/>
      <br />
      <hr />
      <UseCallbackEx2 postId={postId}/>
      <button onClick={()=>{
        setpostId(postId + 1);
        console.log(postId);
        }}>+1</button>

      <br />
      <hr />
      <UseMemoPr/>
      <br />
      <hr />
      <UseCallbackPr />
      <UseReducerEx />
      <br />
      <hr />
      <Faq/> */}
      <Form />
    </div>
  );
}

export default App;
