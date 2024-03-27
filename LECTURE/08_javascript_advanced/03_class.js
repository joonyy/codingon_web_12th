function Circle(radius){
  this.radius=radius;
  this.draw = function(){
    console.log('⭐️');
  }
}
const c = new Circle(1);
console.log(c);
c.draw();
// 위 코드를 ES6 클래스 문법으로 바꾼다면!
class Circle1{
  constructor(radius){
    this.radius = radius;
  }
  draw(){
    console.log('⭐️')
  }
}
const d = new Circle1(1);
console.log(d);
d.draw();