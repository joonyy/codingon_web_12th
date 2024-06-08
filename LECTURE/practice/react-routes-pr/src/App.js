import './styles/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MainPage from './pages/MainPage';
import StudentPage from './pages/StudentPage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/student/:studentName' element={<StudentPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
