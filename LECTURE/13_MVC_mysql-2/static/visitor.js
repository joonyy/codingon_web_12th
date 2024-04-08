//script에 defer 을 써주면 dom 형성 순서와 상관없이 실행.
const tbody =  document.querySelector('tbody');
const btnGroup = document.querySelector('#button-group');

function createVisitor(){
  const form = document.forms['visitor-form'];
  if(form.name.value.length === 0 || form.comment.value.length === 0){
    alert('이름 또는 방명록 내용을 작성해주세요');
    return;
  }
  //이름 10글자 유효성 검사
  if(form.name.value.length > 10){
    alert('10글자 초과입니다.');
    return;
  }
  axios({
    method:'post',
    url:'/visitor',
    data:{
      name:form.name.value,
      comment:form.comment.value
    }
  }).then(res =>{
    console.log('/static/visitor.js ==>res', res.data);
    const data = res.data;
    const html = `
    <tr id="tr_${data.id}">
          <td>${data.id}</td>
          <td>${data.name}</td>
          <td>${data.comment}</td>
          <td><button type="button" onclick="editVisitor(${data.id})">수정</button></td>
          <td><button type="button" onclick="deleteVisitor(this,${data.id})">삭제</button></td>
        </tr>
        `

        tbody.insertAdjacentHTML('beforeend', html);
//insertAdjacentHtml : 지정된 텍스트를 html 파싱하여, 그 결과 형성된 노드를 지정된 위치의 dom 트리에 삽입.
  })
}//createVisitor 끝

function editVisitor(id){
  axios({
    method:'get',
    url:`/visitor/${id}`
  }).then(res=>{
    console.log('static/visitor.js > editVisitor');
    const {name, comment} = res.data;
    const form = document.forms['visitor-form'];
    form.name.value = name;
    form.comment.value=comment;
  })

  const html = `
  <button type="button" onclick="editDo(${id})">변경</button>
  <button type="button" onclick="editCancel()">취소</button>
  `

  btnGroup.innerHTML = html;
}

function editDo(id){
  const form = document.forms['visitor-form'];
  axios({
    mehtod:"PATCH",
    url:'/visitor',
    data:{
      id:id,
      name: form.name.value,
      comment : form.comment.value
    }
  }).then(res =>{
    console.log('editDo', res.data);
    const children = document.querySelector(`#tr_${id}`).children;
    children[1].textContent = form.name.value;
    children[2].textContent = form.comment.value;
    editCancel();
  })
}

function editCancel(){
  const form = document.forms['visitor-form'];
  form.reset();
  const html = `<button type="button" onclick="createVisitor()"> 등록 </button>`;
  btnGroup.innerHTML = html;
}

function deleteVisitor(){
  console.log('deleteVisitor', obj, id)
  if(!confirm('정말 삭제하시겠습니까?')) return;
  axios({
    method:'DELETE',
    url:'/visitor',
    data : {id:id}
  }).then(res=>{
    console.log(res.data)
    obj.closest(`#tr_${id}`).remove();
  })
}
