function arrElement<T>(arr:T[],x:number):T|boolean{
  let length = arr.length;
  if(length <= x) return false;
  else return arr[x];
}

console.log(arrElement<string>(["a"],1));