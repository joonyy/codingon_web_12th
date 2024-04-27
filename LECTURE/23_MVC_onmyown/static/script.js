const tbody = document.querySelector('tbody');
const btnGroup = document.querySelector('#button-group');
const form = document.forms['visitor-form'];

function createVisitor(){
  if(form.name.value.length=== 0 || form.comment.value.length===0){
    alert("이름과 내용을 기입하세요");
    return;
  }
  if(form.name.value.length>10){
    alert('이름은 10글자 미만으로 쓰세요');
    return;
  }
  axios({
    method:"POST",
    url:'/visitorsAdd',
    data:{
      name:form.name.value,
      comment:form.comment.value,
    }
  }).then(res =>{
    const data =res.data;
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
alert(`찾는 사람의 id = ${id}`);

axios({
  method:'get',
  url:'/visitorsEdit/:id'
}).then(res=>{
  const {name,comment} = res.data;
  form.name.value = name;
  form.comment.value =comment;
  const html = `
  <button type="button" onclick="editDo(${id})">변경</button>
  <button type="button" onclick="editCancel()">취소</button>  
  `
  btnGroup.innerHTML = html;
})
}

function deleteVisitor(obj, id){

}

function editCancel(){

}