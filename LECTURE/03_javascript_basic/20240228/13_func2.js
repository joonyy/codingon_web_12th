function foo(){
  console.log(foo.length);
}
foo(); //length : 0
foo(1,2); //length : 0, 선언 시의 매개변수 0개

function bar(x){
  console.log(x);// 선언 시 매개변수 1개
}

function baz(x,y){
  console.log(x,y);//선언 시 매개변수 2개
}

console.log(bar.length); //1
console.log(baz.length);//2



console.log('-----return문-----');

function add(x,y){
  //console.log(`주어진 값들은 ${x}, ${y}입니다.`)
  // console.log(x+y);
  return x+y;
}
let result = add(1,2);
console.log(add(3,4));

console.log(result);