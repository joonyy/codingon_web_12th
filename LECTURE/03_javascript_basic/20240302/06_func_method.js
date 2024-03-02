/**
 * 배열에 사용되는 메서드들
 * map()
 * filter() 조건에 맞는지 검사.
 * reduce()
 * every()
 * find()
 */

//filter()
let arr1=[3,200,1,2,8,9];

arr1= arr1.filter(function(num){
  return num>3;
})
console.log(arr1);

let arr2 = ['apple', 'pineapple','grape','banana'];
arr2 = arr2.filter(function(fruit){
  return fruit.length >=6;
});
console.log(arr2);

//find(조건) : 조건에 맞는 첫번째 원소를 찾는다
let arr3 = [10,20,30,40];
let result = arr3.find(function(num){
  return num > 20;
});
console.log(result);

//filter().map() 함께 사용 -> 체이닝 방식
const arr4= [1,2,-3,4,5]
let printStr = arr4.filter(item => item > 0).map(item => '<li>' + item + '</li>');
console.log(printStr);
document.write(printStr);

//every() : 배열의 모든 조건이 충족하는지 확인하기.
const arr5 = [1,2,-3];
let result1 = arr5.every(function(item){
  return item>=0
});

console.log(result1);

//reduce(합계를 갖는 변수, 현재값)
let arr6 = [1,3,4,7];
let result2 = arr6.reduce((acc, currentValue) => {
  return acc+currentValue;
}, 0);
console.log(result2);

const number = [1,2,3,4,1];

function count0cc(array, searchEle){
  let result3 = array.filter(item =>item === searchEle);
  return result3.length;
}
console.log(count0cc(number,6));