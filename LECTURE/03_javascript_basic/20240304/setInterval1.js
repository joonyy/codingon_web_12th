let addNum = 0;
let subNum = 1000;
let increase = setInterval(function(){
  addNum++;
  console.log('addNum ++', addNum);
},1000);

let decrease = setInterval(function(){
  subNum--;
  console.log('addNum --', subNum);
},1000);


clearInc = () => clearInterval(increase);
clearDec = () => clearInterval(decrease);