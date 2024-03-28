function makeNum(a,b){
  if(a > b) [a,b] = [b,a];
  const result = [];
  for(i = a; i<=b; i++){
    result.push(i);
  }
  return result;
}


console.log(makeNum(1,100));