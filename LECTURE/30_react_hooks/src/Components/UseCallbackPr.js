import React, {useState, useCallback} from 'react';

function UseCallbackPr() {
  const [items, setItems] = useState(["item 1","item 2","item 3"]);

  const [isEdit, setIsEdit] = useState(null);

  const [editText, setEditText] = useState('');

  const handleEdit = useCallback((item, idx) =>{
    //edit버튼을 클릭했다는 것을 밑에서 감지할 수 있어야 한다.
    console.log("handleEdit 실행!");
    setIsEdit(idx);
    setEditText(item);
  },[])

  const handleSave = useCallback(() =>{
    console.log("handleSave 실행!");
    setItems(items.map((item,idx)=>(idx===isEdit ? editText : item)));
    setIsEdit(null);
  },[editText]); 
  //editText의 값은 변경되는 값이다. 그러므로, 
  //handleSave가 만들어지는 시점에 동작하게 된다.

  const handleDelete = useCallback((itemToDelete) =>{
    console.log("handleDelete 실행!");
    setItems((items.filter((item,idx)=> idx !== itemToDelete)))
  },[items])

  return (
    <div>
      <h1>UseCallbackPr</h1>
      <ul>
        {items.map((item,idx)=>{
          return(
          <li key={idx}>
            {isEdit===idx ? (
              <>
              <input type="text" value={editText} onChange={(e)=>{setEditText(e.target.value)}}/>            <button onClick={handleSave}>Save</button>
              </>
            ):
            (
              <>
              {item}
              <button onClick={() => handleEdit(item,idx)}>Edit</button>
              <button onClick={() => handleDelete(idx)}>Delete</button>
              </>
            )}

            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default UseCallbackPr
