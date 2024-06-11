function sum1(a:number, b:number) : number {
  return a+b;
}

console.log(sum1(5,11));


function sum2(...nums:number[]):number{
  let a = 0;
  for(let i = 0; i<nums.length;i++){
    a+=nums[i];
  }
  return a;
}

console.log(sum2(1,2,3,4,10));

