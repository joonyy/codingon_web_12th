import { useNavigate, useParams, useSearchParams } from "react-router-dom";


export default function StudentPage(){
  const {studentName} = useParams();

  const [searchParams,setSearchParams] = useSearchParams(); 

  const navigate = useNavigate();

  const toggleQuery = () =>{
    if(searchParams.get('name') === 'kdt3rd'){
      searchParams.delete('name');
      setSearchParams(searchParams);
    }else{
      setSearchParams({name:'kdt3rd'});
    }
  }
  return(
    <>
      <button onClick={toggleQuery}>
      본명을 바꿔버리자!</button>
      <p>학생의 이름은 <span style={{color:"green"}}>{studentName}</span>입니다.</p>
      {searchParams.get('name')==="kdt3rd"?
      <p>실제 이름은 <span style={{color:"red"}}>{searchParams.get("name")}</span></p>:
      <></>
      }
      <button onClick={() => navigate(-1)}>이전 페이지로</button>
    </>
  )
}
