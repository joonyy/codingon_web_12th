import './App.css';

function App(){
  const name = "JoonYoung Kim";
  const date = new Date();
  const thisyear = date.getFullYear();
    return(
    <div className='App'>
    <header className='Header'>
      <h1 style={{backgroundColor:"aquamarine"}} > {name}</h1>
      <h3> developer, seoul, 010-6251-4126 </h3>
      <h3>age : {thisyear - 1997 + 1}</h3>
      <input type='checkbox' /> 방명록을 남겨주세요!<br />
      <input style={{width:500,height:200}} placeholder='여기에 적어주세요! 이벤트를 배우지 않아 제출은 안됩니다.' />
    </header>
      감사합니다~
    </div>
    )

}
export default App;