import React from "react";
import { useState } from "react";

export default function Guest(){
  //저장된 데이터
  const [Data, setData] = useState([]);
  //추가할 데이터
  const [Input, setInput] = useState({
    name:"",
    title:""
  });
  //기본 검색조건
  const [searchField, setSearchField] = useState("name");
  
  //검색단어
  const[searchTerm, setSearchTerm] = useState("");

  //보여주는 데이터
  const[displayData, setDisplayData] = useState([]);

  //입력되는 데이터 관리
  const InputFunc=(e)=>{    
    const {name, value} = e.target;
    setInput({
      ...Input,
      [name]:value
    })
  }

  //데이터 배열에 내용 추가
  const addData = () =>{
    if(Input.name.trim().length===0 || Input.title.trim().length===0) return;

    const newData = Data.concat({
      id: Data.length+1,
      name : Input.name,
      title : Input.title
    })
    setData(newData);
    setInput({
      name:"",
      title:""
    })
    setDisplayData(newData);
  }


  // 검색
  const handleSearch = () => {
    const filteredData = Data.filter((item) =>
      item[searchField].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayData(filteredData);
  };
  
  // 전체 보여주기
  const showAll = () => {
    setDisplayData(Data);
  };

  return(
    <div>
      <fieldset>
        작성자 : <input type="text" name="name" placeholder="작성자" value={Input.name} onChange={InputFunc}/>
        제목 : <input type="text" name="title" placeholder="제목" value={Input.title}  onChange={InputFunc}/>
        <button onClick={addData}> 작성 </button>
      </fieldset>
    <br/>
    <select value={searchField} onChange={(e) =>{setSearchField(e.target.value)}}>
      <option value="name">작성자</option>
      <option value="title">제목</option>
      <option value="id">번호</option>
    </select>

    <input type="text" placeholder="검색어" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />

    <button onClick={handleSearch} >검색</button>
    <button onClick={showAll}>전체</button>

    <br />
    <br />
    <table border={2} width={500}>
      <thead>
        <tr>
        <th>번호</th>
        <th>제목</th>
        <th>작성자</th>
        </tr>
      </thead>
      <tbody>
    {displayData.map((value) =>{
      return(
        <tr key={value.id}>
          <td>{value.id}</td>
          <td>{value.title}</td>
          <td>{value.name}</td>
        </tr>
      )
    })}
    </tbody>
  </table>
    </div>
  )
}