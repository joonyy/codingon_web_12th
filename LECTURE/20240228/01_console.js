7
8
9
// 한줄주석

/*여러줄 주석을
사용하면
이렇게 쓰면 됩니다!*/

//콘솔,브라우저의 콘솔창에 출력.

console.log("김준영");
console.log(console);

//시간계산
console.time('label');
console.timeEnd('label');

//string substitution(문자대용)
console.log("This is a String %s","김준영");
console.log("이것은 숫자 %i입니다.", 32);
console.log("%c This is a large text", "color:red; font-size:30px");
console.table({name:'joonykim', email:'blackhound97@gmail.com'});

function division(x,y){
  if(y<=0){
    console.warn('y는 1보다 커야 합니다.');
    //브라우저 경고표시 : 노란 느낌표 아이콘.
  }
  return x-y;
}

division(2, -1);