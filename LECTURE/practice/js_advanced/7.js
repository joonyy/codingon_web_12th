class Circle{
  constructor(radius){
    this.radius = radius;
  }
  area(){
    return this.radius*this.radius * Math.PI;
  }
}

const myCircle = new Circle(2);

console.log(myCircle.area());