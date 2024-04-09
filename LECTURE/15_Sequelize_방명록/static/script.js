const tbody = document.querySelector('tbody');
const btnGroup = document.querySelector('#button-group');

//방문자 추가
function createVisitor(){
  const form = document.forms['visitor-form'];
  if (form.name.value.length === 0 || form.comment.value.length === 0) {
      alert('이름 또는 방명록 기입해주세요!');
      return;
  }
  if (form.name.value.length > 10) {
      alert('이름은 10글자 미만입니다!');
      return;
  }
  axios({
      method:'post',
      url :'/addvisitor',
      data :{
          name:form.name.value,
          comment:form.comment.value
      }
  }).then(res=>{
      console.log('allVisitorsList 에서 넘어온',res.data)
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
      // 테이블에 내용 추가
      tbody.insertAdjacentHTML('beforeend', html);
      // 입력창 초기화
      form.reset();
  })

}
//수정하기
function editVisitor(id){
  alert(`찾는 1명의 id ${id}`);
  const form = document.forms['visitor-form'];
  axios({
      method:'get',
      url: `/visitormodify/${id}`
  }).then(res =>{
      const {name, comment }= res.data;
      console.log('editVisitor > getShowAvisitor 에서 넘어온',res.data);
      form.name.value=name;
      form.comment.value=comment;
  })
  // 변경, 취소 버튼 보이기
  const html = `
  <button type='button' onclick='editDo(${id})'>변경</button>
  <button type='button' onclick='editCancle()'>취소</button>   `;
  btnGroup.innerHTML = html;
}
//수정 > 변경
function editDo(id){
  console.log(`${id} 내용을 바꾸자고 합니다`);
  const form = document.forms['visitor-form'];
 axios({
  method:'patch',
  url:'/visitoreidtDo',
  data:{
      id:id,
      name : form.name.value,
      comment: form.comment.value
  }
 }).then(res=>{
    console.log('editDo', res.data)
    const children = document.querySelector(`#tr_${id}`).children;
    console.log(children);
    children[1].textContent = form.name.value;
    children[2].textContent = form.comment.value;
    editCancel();
 })
}
//수정 > 취소
//삭제
function deleteVisitor(obj,id){
  console.log(obj)
  console.log(id)
  if (!confirm('정말 삭제하시겠습니까?')) return;
  axios({
    method:'delete',
    url:'/visitordelete',
    data:{ id:id}
  }).then(res => {
    console.log('삭제버튼 클릭 > 디비수정 후 되돌아온내용',res.data);
    obj.closest(`#tr_${id}`).remove()
  })
}