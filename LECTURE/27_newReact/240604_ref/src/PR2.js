import React,{useState, useRef} from "react";

export default function PR2(){
  const writerRef = useRef();
  const titleRef = useRef("title");
  const [Data, setData] = useState([]);


  const handleData = () =>{
    if(writerRef.current.value === ''){
      writerRef.current.focus();
      return;
      }
    if(titleRef.current.value === '') {
      titleRef.current.focus();
      return;
    }
    const newData = Data.concat({
      writer : writerRef.current.value,
      title : titleRef.current.value
    })
    setData(newData)
    writerRef.current.value = '';
    titleRef.current.value = ''
  }

  return(
    <>
      <h1>실습 2</h1>
      <input type="text" ref={writerRef} placeholder="작성자"/> 
      <input type="text" ref={titleRef} placeholder="제목"/>
      <button onClick={handleData}>추가하기</button>
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
          {Data.map((value,index)=>{
            return(
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.writer}</td>
                <td>{value.title}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}