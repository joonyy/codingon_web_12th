import React,{useMemo, useState} from 'react'

function UseMemoPr() {
  const [input, setInput] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const changeInput = (e) =>{
    setInput(e.target.value);
  }
  const changeSearchInput = (e) =>{
    setSearchInput(e.target.value);
  }

  //my answer
  // const number = useMemo(()=>{
  //   let ret = 0;
  //   const arr = input.split(" ");
  //   for(let i =0;i<arr.length;i++){
  //     if(input ==="" || searchInput==="") return 0;
  //     if(searchInput === arr[i]) ret++;
  //   } return ret;
  // },[searchInput, input])

  //[answer]
  const countWord= useMemo(() => {
    // 입력받은 문자열와 찾고자 하는 단어가 빈 문자열이 아닌 경우에만 계산
    if (input.trim() && searchInput.trim()) {
        const words = input.split(' ');
        return words.filter((word) => word.includes(searchInput)).length;
    }
    // 빈 문자열인 경우 0 반환
    return 0;
    });

  return (
    <div>
      <h1>UseMemoPr</h1>
      <input type="text" value={input} onChange={changeInput} /><br />
      <input type="text" value={searchInput} onChange={changeSearchInput} />
      <p>"{searchInput}" 단어의 빈도 수 : {countWord}</p>
    </div>
  )
}

export default UseMemoPr
