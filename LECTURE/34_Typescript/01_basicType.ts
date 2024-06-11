//typescript basic type

//명시적으로 타입을 써주는 방법!
let a: number = 1;
a = 2;
// a = "hello";
console.log(a);

let b: string = 'str';
let c: boolean = true;
let d: undefined;
let e: null = null;

let aa = 1;
let bb = "hi";
let cc = false;
let dd; // any
let ee = null; // any

//배열
let number: number[] = [1,2,3,4,5];

let strArr:string[] = ['apple','banana','kiwi'];
let strArr2:Array<string> = ['apple','banana','kiwi'];

//배열의 원소가 여러 타입이라면?
let arr1: (string | number | boolean)[] = [1, true, 'string'];//순서는 상관없다~

//boolean, null, number array가 원소가 될 수 있는 arr2
let arr2: Array<boolean | number[] | null> = [true, null,[1,2,3]];

//object
let obj1: object = {
  name:'codingon',
  grade: 1,
};