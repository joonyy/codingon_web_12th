// console.log(document);
// console.log($(document));
// Ready() => 모든 앨리먼트가 로딩을 마치면 실행.
$(document).ready(function(){
  console.log('문서의 DOM트리가 완성되면 실행되는 것으로, body 태그 이전에 사용되고 된다.');
})
$(function(){
  console.log('로딩');
})
//로딩에 관련된 이벤트 이름
document.addEventListener('load', function(){
  //element를 모두 읽어오고 외부 css 이미지 등 모든 로딩을 마치고 실행!
  //window와 함께 사용.
})

document.addEventListener('DOMContentLoaded', function(){
  // 외부 CSS, 이미지를 읽어오지 않은 상태에서, DOM 내용이 다 읽히기만 하면 실행.
  //document와 함께 사용
})

//마우스 이벤트
$('.p-msg').click(function(){
  $('.p-msg').css('color','red');
})

$('.num').click(function(){
  // $('.num').css('color', 'orange');
  $(this).css('color','purple');
})

//mouseover() : 마우스가 올라가면
$('.numbers').mouseover(function(){
  $(this).css('background-color','skyblue');
  $(this).append('<div>Handler for .mouseover() called.</div>');
})
$('.div-hover').hover(function(){
  $(this).addClass('hover');
}, function(){
  $(this).removeClass('hover');
})

// $(window).scroll(function(){
//   console.log('스크롤');
// })
$(window).on('scroll', function(){
  console.log('-->스크롤')
})

$('.input-key').keydown(function(e){
  if(e.code === "ArrowUp"){
    console.log('up');
  }else if(e.code === 'ArrowRight'){
    console.log('right')
  }else if(e.code === 'ArrowLeft'){
    console.log('left');
  }else if(e.code === 'ArrowDown'){
    console.log('down');
  }else{
    console.log('그 외');
  }
})

//form event
$('#todo-form').submit(function(e){
  e.preventDefault();
  const todo = $('input[name="todo"]').val();
  $('.todos').append(`<li>${todo}</li>`);
  $('input[name="todo"]').val('');
})

const btns = document.querySelectorAll('.btn');
const spans = document.querySelectorAll('.span');
for(span of spans) span.addEventListener('click', setBgColor);
function setBgColor(){
let colorValue = Math.floor(Math.random()*100);
this.style.backgroundColor = "#ff00" + colorValue;
}
for(btn of btns){
  // console.log(btn);
  // btn.style.backgroundColor ="royalblue";
  // btn.addEventListener('click', function(){
  //   this.style.backgroundColor="yellowgreen";
  // })
  btn.addEventListener('click', setBgColor)
}



$('a#inactive').on('click',function(e){
  e.preventDefault();
$('#text').append('해당링크는 동작하지 않습니다.');
})