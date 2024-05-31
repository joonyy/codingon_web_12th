import './App.css';
//components에 PascaCase를 쓰는건 선택이 아닌 필수입니다!
import MyFood from './myFood.js';
import Book from './Book.js';
import ClassComponent from './ClassComponent.js';
import Props3 from './Props3.js';

function App() {
  function myfunc() {
    console.log("app.js에서 전송된 함수입니다!");
  }

  return (
    <div className="App">
      {/* <MyFood>매콤짭짤함</MyFood>
      <MyFood food={"돈가스"}>바삭바삭함</MyFood>
      <hr/>
      <Book title={"나의 하루는 7시에 시작된다"} author={"김유진"} price={13500} type={"자기계발서"} />
      <hr/> */}
    {/* <ClassComponent></ClassComponent> */}
    <Props3 text='이건 부모에서 전달해준 props' valid={myfunc}/>
    <Props3 valid={() => console.log("이렇게도 될까요오")}/>
    </div>
  );
}

export default App;
