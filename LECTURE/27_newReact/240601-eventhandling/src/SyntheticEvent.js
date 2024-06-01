export default function SyntheticEvent(){
  function syntheticEvent(e){
    console.log('SyntheticEvent Btn Clicked!');
    console.log(e);
    //콘솔에 기록되는 e객체는 SyntheticEvent (합성 이벤트)
    //: react DOM이 아닌 virtual DOM을 감싸는 것처럼 사용.
    //웹 브라우저의 nativeEvent가 아닌, 이를 감싸고 있는 합성 이벤트를 사용한다.
  }

  function printInputValue(e){
    console.log(e.target.value);
  }

  return(
    <div>
      <button onClick={syntheticEvent}>SyntheticEvent 콘솔에 찍기</button>
      <br />
      {/* input값의 변화륿 보고 싶다면? */}
      <input type="text" onChange={printInputValue} />
    </div>
  )
}