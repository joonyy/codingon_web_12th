const tbody = document.querySelector('tbody');
const btnGroup = document.querySelector('#button-group');

function createVisitor(){
  const form = document.forms['visitor-form'];

  if(form.name.value.length === 0 || form.comment.value.length === 0){
    alert('이름과 내용을 기입해주세요');
    return;
  }
  if(form.name.value.length>10){
    alert('이름은 10글자 미만이어야 합니다.');
    return;
  }
  axios({
    method:'POST',
    url:"/addVisitor",
    data:{
      name:form.name.value,
      comment : form.comment.value,
    }
  }).then(res=>{
    const data = res.data;
    const html = `
      <tr id="tr_${data.id}">
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.comment}</td>
        <td><button type="button" onclick="editVisitor(${data.id})">수정</button></td>
        <td><button type="button" onclick="deleteVisitor(this, ${data.id})">삭제</button></td>
      </tr>
    `;

    tbody.insertAdjacentHTML('beforeend',html);
    form.reset();
  })
}

function editVisitor(id){
  /**
   * url : /visitor/id 전송
   * /visitor/:id
   * 받을 땐 req.params.id
   */
  alert(`찾는 사람의 id = ${id}`);
  const form = document.forms['visitor-form'];

  axios({
    method:'get',
    url:`/visitormodify/${id}`
  }).then(res =>{
    const {name, comment} = res.data;
    form.name.value = name;
    form.comment.value = comment;
    const html = `
    <button type="button" onclick="editDo(${id})">변경</button>
    <button type="button" onclick="editCancel()">취소</button>  
    `
    btnGroup.innerHTML = html;

  })
}


function editDo(id){
  const form = document.forms['visitor-form'];
  axios({
    method:'patch',
    url:'/visitoreditDo/:id',
    data:{
      id:id,
      name: form.name.value,
      comment:form.comment.value,
    }
  }).then(res=>{
    const children = document.querySelector(`#tr_${id}`).children;
    children[1].textContent = form.name.value;
    children[2].textContent = form.comment.value;
    editCancel();
  })
}
function editCancel(){
  const form = document.forms['visitor-form'];
  form.reset();
  const html = `<button type="button" onclick='createVisitor()'>등록</button>`;
  btnGroup.innerHTML = html;
}

function deleteVisitor(obj, id){
  if(!confirm('정말 삭제하시겠습니까?')) return;
  axios({
    method:"delete",
    url:"/visitordelete",
    data:{id:id}
  }).then(res =>{
    obj.closest(`#tr_${id}`).remove();
  })
}

