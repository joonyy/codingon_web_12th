class Circle2{
  constructor(radius){
    this.radius = radius;
  }
  draw(){
    console.log('🦉');
  }
}
const a = new Circle2(1);
console.log(typeof(a));
console.log(a);
a.draw();

class Circle3{
  constructor(radius){
    this.radius = radius;
    this.move = function(){
      console.log('🍕');
    }
  }
  draw(){
    console.log('🥙');
  }
}
const b = new Circle3(2);
console.log(b);
b.draw;