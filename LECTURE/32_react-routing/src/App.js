import MainPage from './pages/MainPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
