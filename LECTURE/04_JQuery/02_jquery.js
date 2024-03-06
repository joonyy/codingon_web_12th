function getValue(){
  let inputVal =  $('input').val();
  console.log(inputVal);
  // let inputVal = document.querySelector('input').value;
  // console.log(inputVal);
}

function setValue(){
  document.querySelector('input').value="설정을 완료했습니다.";
  $('input').val('제이쿼리 사용함');
}
function changeCssJS(){
  let span = document.querySelector('span');
  span.style = "font-size:2rem; color: hotpink";
}
function changeCssJquery(){
  // $('span').css('font-size', '2rem');//css(a,b)
  // $('span').css('color', 'hotpink');
  $('span').css({fontSize:'2rem', backgroundColor:'hotpink' ,color:'black'});
}
function getCssJquery(){
  console.log($('span').css('color'));
  document.querySelector('span').style.color;
}

function changeAttrJS(){
  let a = document.querySelector('a');
  a.innerHTML = "naver";
  a.setAttribute('href','https://www.naver.com')
}

function changeAttrJquery(){
  $('a').text('daum');
  $('a').attr('href','https://www.daum.net');
}

function changeTextJS(){
  let p = document.querySelector('.p-text');
  p.textContent = "자바스크립트로 변경";
}

function changeTextJquery(){
  $('.p-text').text('제이쿼리로 변경');
}

function changeHtmlJS(){
  let p = document.querySelector('.p-html');
  p.innerHTML = '<h3>javascript</h3>';
}
function changeHtmlJquery(){
  $('.p-html').html('<h1>jQuery<h1>');
}

function appendJS(){
  let ul = document.querySelector('.colors');
  let li = document.createElement('li');
  li.innerText = "마지막에 자식으로 추가된 요소"
  ul.append(li);
}

function appendJquery(){
  $('.colors').append('<li>마지막에 자식으로 추가된 요소</li>');
}

function prependJS(){
  let ul = document.querySelector('.colors');
  let li = document.createElement('li');
  li.innerText = "처음에 자식으로 추가된 요소"
  ul.prepend(li);
}

function prependJquery(){
  $('.colors').prepend('<li>처음에 자식으로 추가된 요소</li>');
}

function beforeJS(){
  let green = document.querySelector('.green');
  let li = document.createElement('li');
  li.innerText = "이전 형제 요소로 추가된 자바스크립트"
  green.before(li);
}

function beforeJquery(){
  $('.green').before('<li>이전 형제 요소로 추가된 JQuery</li>');
}

function afterJS(){
  let green = document.querySelector('.green');
  let li = document.createElement('li');
  li.innerText = "다음 형제 요소로 추가된 자바스크립트"
  green.after(li);
}

function afterJquery(){
  $('.green').after('<li>다음 형제 요소로 추가된 JQuery</li>');
}
//--------------
//remove()

function removeJS(){
  let li2= document.querySelector('#li2');
  li2.remove();
}
function removeJquery(){
  $('#li2').remove();
}

function emptyJS(){
  let nums= document.querySelector('ul.nums');
  nums.innerHTML=""; // empty() 함수 없어용
}
function emptyJquery(){
  $('ul.nums').empty();
}
//--------------
function findParent(){
  console.log(document.querySelector('.child2').parentElement);
  console.log($('.child2').parent());
}
function findParents(){
  console.log($('.child2').parents());
}

function findNext(){
  console.log(document.querySelector('.child2').nextElementSibling);
  console.log($('.child2').next());
}
function findPrev(){
  console.log(document.querySelector('.child2').previousElementSibling);
  console.log($('.child2').prev());
}
function findChildren(){
  console.log(document.querySelector('.parent').children);
  console.log($('.parent').children());
}

//---
function addClass(){
  document.querySelector('#hi').classList.add('fs-50');
  //$('#hi').addClass('fs-50');
}
function removeClass(){
  document.querySelector('#hi').classList.remove('fs-50');
  //$('#hi').removeClass('fs-50');
}
function hasClass(){
  console.log(document.querySelector('#hi').classList.contains('fs-50'));
  //console.log($('#hi').hasClass('fs-50'));
}
function toggleClass(){
  document.querySelector('#hi').classList.toggle('bg-pink');
  //$('#hi').toggleClass('bg-pink');
}