function checkHowMany(array, num){
  let sum = 0;
  for(let i=0;i<array.length;i++){
    if(num === array[i]) sum++;
  }
  return sum;
}

function organize(array){
  for(let i=0;i<array.length;i++){
    console.log(`${array[i]}은/는 ${checkHowMany(array, array[i])}개\n`);
  }
}
organize([1,2,3,4,1]);