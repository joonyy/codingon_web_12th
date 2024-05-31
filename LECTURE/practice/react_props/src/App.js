import './App.css';
//components에 PascaCase를 쓰는건 선택이 아닌 필수입니다!
import MyFood from './myFood.js';
import Book from './Book.js';

function App() {
  return (
    <div className="App">
      <MyFood>매콤짭짤함</MyFood>
      <MyFood food={"돈가스"}>바삭바삭함</MyFood>
      <hr/>
      <Book title={"나의 하루는 7시에 시작된다"} author={"김유진"} price={13500} type={"자기계발서"} />
      <hr/>
    </div>
  );
}

export default App;
