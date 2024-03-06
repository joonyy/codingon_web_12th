const colorjs = document.querySelectorAll('.color');
const colorjquery= $('.color');

console.log(Array.isArray(colorjs));
console.log(Array.isArray(colorjquery));

function submitjs(){


  for(let i=0;i<colorjs.length;i++){
    colorjs[i].addEventListener('click', function(){
      colorjs[i].style.color="red";
    })
  }

  // colorjs.forEach((color) =>{
  //   color.addEventListener('click', function(){
  //     this.style.color="red";
  //   });
  // })

  // document.getElementById('div1').innerText="반갑습니다.";
  // document.getElementById('div1').setAttribute('style',"border:2px solid red");
}
function submitjquery(){


  colorjquery.on('click',function(){
    $(this).css('background-color','skyblue');
  })
  // const div1 = $('#div1');
  // div1.text('새로 왔습니다.');
  // div1.css('border','3px dashed gold');
}