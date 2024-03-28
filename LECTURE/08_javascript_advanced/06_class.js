class House{
  constructor(year,name,windows){
    this.year= year;
    this.name= name;
    this.windows=windows;
  }
  getAge(){
    console.log(`${this.name}은 건축한지 ${2024 - this.year}년이 됐습니다.`);
  }
  getWindow(){
    console.log(`${this.name}은 창문의 개수가 ${this.windows}개입니다.`);
  }
}

const house1 = new House(1997, '디딤돌', 5);
house1.getAge();
console.log(house1.name);
/**
 * 상속
 * 부모로부터 물려받는 것.
 */
class Apartment extends House{
  constructor(year, name, windows, floor){
    super(year, name, windows); // super() => 부모에서 받아오겠다!
    this.floor = floor;
  }
  getFloor(){
    return `${this.year}년에 지어진 ${this.name}아파트의 총 층수는 ${this.floor}입니다.`
  }
  getAge(){
    super.getAge();
    console.log(`${this.name} 아파트는 ${2024 - this.year}년된 아파트이며, ${this.floor}층입니다`);
  }
}

const apt1 = new Apartment(2020, '레미안', 100, 15);
console.log(apt1);
console.log(apt1.getFloor());
apt1.getAge();
//-----------------------------
/**
 * 가로 세로
 * 면적을 구하는 메서드
 */
class Shape{
  constructor(width, height){
    this.width = width;
    this.height = height;
  }
  getArea(){
    return this.width * this.height
  }
  move(){
    console.log('move');
  }
}

/**
 * 자식 Circle 클래스 생성
 * move() 메서드 출력 시 "move > circle"
 */
class Circle extends Shape{
  constructor(width, height){
    super(width, height);
  }
  move(){
    console.log('move > circle');
  }
}

const circle = new Circle(1,2);
console.log(circle);
circle.move();