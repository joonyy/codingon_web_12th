import React from 'react';
import {useState} from 'react';

export default function Input(){
  const [newInfo, setNewInfo] = useState({
    id: "",
    name : "",
    email : "",
  })

  const [userInfo, setUserInfo] = useState([
      {
        id:1,
        name : "코디",
        email : "codi@gmail.com"
      },
      {
        id:2,
        name : "김준영",
        email : "blackhound97@gmail.com"
      }
    ]);
  const showInfo = () =>{
    if(newInfo.name.trim().length === 0 || newInfo.email.trim().length===0) return;


    const newUserInfo = userInfo.concat({
      id: userInfo + 1,
      name : newInfo.name,
      email : newInfo.email
    })
    setUserInfo(newUserInfo);
    setNewInfo({
      name:"",
      email:""
    });
  }

  const onChangeFunc = (e) =>{
    const {name, value} = e.target;
    setNewInfo({
      ...newInfo,
        [name]:value,
    })
  }


  const deleteInfo = (targetId) =>{
    const updateInfo = userInfo.filter((element)=>{
      return element.id !== targetId;
    })
    setUserInfo(updateInfo);
  }

  return(
    <div>
      <input type="text" name="name" placeholder='이름' value={newInfo.name} onChange={onChangeFunc} />
      <input type="email" name="email" placeholder='이메일' value = {newInfo.email} onChange={onChangeFunc}/>      
      <button onClick={showInfo}>등록</button>
      {userInfo.map((value) =>{
        return <h1 key={value.id} onDoubleClick={() => deleteInfo(value.id)}>{value.name} : {value.email}</h1>
      })}
    </div>
  )
}