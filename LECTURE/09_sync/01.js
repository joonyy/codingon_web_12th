//동기화 방식
console.log('before');
console.log('1');
console.log('after');

//비동기 방식
console.log('Before');
setTimeout(function(){
  console.log('1');
},3000);
console.log('after');