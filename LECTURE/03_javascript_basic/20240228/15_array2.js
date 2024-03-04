/**배열에 사용되는 메서드 */

/**
 * push(x) : 맨 끝에 추가
 * pop() : 맨 끝에서 추출(제거)
 * shift() : 맨 앞에 한개 제거
 * unshift(x) : 맨 앞에 한개 추가
 *  => 사용 시, 원본 배열에 변화를 준다.
 */

/*
let arr1=[1,2,3,4,5];

arr1[5] = 6;
console.log(arr1);
arr1.push(7);//push 7
console.log(arr1);
arr1.pop();// 마지막 항목 날리기
console.log(arr1);
arr1.shift(); // 전부 왼쪽으로 한칸 이동!
console.log(arr1);
arr1.unshift(100);// 100을 맨앞에 넣고,나머지 오른쪽으로 한칸씩 이동.
console.log(arr1);*/

console.log('-----------------');
let arr1=[1,2,3,4,5];
// console.log(arr1.splice(2,1));
// console.log(arr1); 
/**
 * splice(a,b) : a번 인덱스부터 b개를 원본에서 제거해! 그리고 그걸 원소로 가지는 배열을 뽑아줘!
 * splice(a,0,b,c) : a번 인덱스부터 b,c 의 원소를 추가한다.
 */
arr1.splice(2,0,'a','b');
console.log(arr1);

//배열을 empty로 만들기
let num1 = [10,20,30]
console.log(num1);
num1=[];
console.log(num1);

let num2 = [10,20,30];
num2.length = 0;
console.log(num2);

//forEach()
let num3 = [10,20,30];
// num3.forEach(function(i){
//   //뭘 할지 찍어줄 것.
//   console.log(i);
// })

num3.forEach(i=>console.log(i));
num3.forEach((i,index) => console.log(i,index));

//배열 합치기
let num4 = [1,2,3];
let num5 = [4,5,6];
let combined = num4.concat(num5);
console.log(combined);
console.log(num4); //합쳐도 원본 배열 손상 X
console.log(num5);
console.log('------------')
//...
let arrayTwo = [...num4, ...num5];
console.log(arrayTwo);

let arrayThree = [...num4, 'a','b', ...num5]
console.log(arrayThree);

let arr =[1,5,7,8,9,6,4,3,2]
console.log(arr.sort());//오름차순
console.log(arr.reverse());//내림차순.

//문자열 분리하고 합치기
let str = "test";
console.log(str.split(''));
let arr2 = ['c','o','m'];
console.log(arr2.join('-'))
let arr5 = [1,4,3,2,6,9,8,7,11,23]
//arr.sort();
arr5.sort((a,b) =>{
  return a>b?1:-1; // 1과 -1은 이동을 의미합니다. 현재가 오름차순. 반대로 하면 내림차순.
});

console.log(arr5);