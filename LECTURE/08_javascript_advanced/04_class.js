/**
 * 클래스 : 객체를 생성하기 위한 틀
 * 1. 집이란 클래스
 * 2. 속성 : 만들어진 연도, 집의 이름, 창문 개수
 * 3. 메소드 : 창문 개수를 출력하는 메소드, 집의 이름을 출력하는 메소드
 */

//클래스 정의
class House{
  constructor(year,name,windows){
    this.year= year;
    this.name= name;
    this.windows=windows;
  }
  getAge(){
    console.log(`${this.name}은 건축한지 ${this.year}년입니다.`);
  }
  getWindow(){
    console.log(`${this.name}은 창문의 개수가 ${this.windows}개입니다.`);
  }
}

const apt = new House(2003, '디딤돌', 10);
console.log(apt.name);
apt.getAge();
apt.getWindow();
