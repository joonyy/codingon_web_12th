import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import PostList from './components/PostList';
import TodoList from './components/TodoList';
function App() {
  const handleClick=(name : string, grade : number, score:number)=>{
    console.log(`안녕 내 이름은 ${name}, ${grade}학년이지. 이번 시험은 ${score}점이야!`);
  }
  return (
    <div className="App">
      {/* <Student name="코딩온" grade={4} part='CS' handleClick={handleClick} />
      <Student name="코딩오프" grade={2} handleClick={handleClick}  /> */}
      {/* <PostList/> */}
      <TodoList />
    </div>
  );
}

export default App;