import React, { useRef, useState } from 'react';
import TodoItem from './TodoItem';
import { ToDoItem } from '../types/types';

export default function TodoList(){
  const [todos, setTodos] = useState<ToDoItem[]>([]); //전체 투두 목록
  const [newTodos, setNewTodos]= useState("");//새로 추가될 투두

  const inputRef = useRef<HTMLInputElement>(null);

  //투두 새로 추가하기
  const addTodo = () =>{
    const updatedTodos = [
      ...todos,
      {id: Date.now(), text: newTodos, completed:false },
    ];
    setTodos(updatedTodos);
    setNewTodos("");
  }

  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) =>{
    if(e.key ==='Enter') addTodo();
  }

  const focusInput = () =>{
    inputRef.current?.focus(); //null
  }

  //투두 아이테 dhksfy tkdxo qusrud gkatn
  const toggleComplete = (targetId:number) =>{
    const updatedTodos = todos.map((todo)=>{
      return todo.id === targetId ? {...todo, completed :!todo.completed}: todo;
    })
    setTodos(updatedTodos);
  }
  return (
    <>
      <h1>TodoList</h1>
      <div>완료한 todo 개수 :{todos.filter((todo)=>(todo.completed === true)).length}</div>
      <div>
        <input type="text" 
        value={newTodos}
        onChange={(e)=>setNewTodos(e.target.value)}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        placeholder='new todo' />
        <button onClick={addTodo}> ADD </button>
        <button onClick={focusInput}>Focus</button>
      </div>
      <ul>
        {todos.map((todo)=>{
          return<TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete}/>
        })}
      </ul>
  
    </>
  
)
}