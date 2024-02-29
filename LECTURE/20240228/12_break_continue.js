/**
 * break는 for문을 벗어나게 한다.
 * continue는 현재 진행중인 loop를 건너뛰고, 다음 loop를 진행하여 for문으로 올라간다.
 */
for(let i=0;i<10;i++){
  if(i==5){
    continue;
  }
  console.log(i);
}