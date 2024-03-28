function callPromise(name){
  return new Promise((res,rej) =>{
    setTimeout(()=>{
      res(name);
    },1000)
  })
}

function backPromise(){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      res('backPromise is back');
    }, 1000)
  })
}

function hellPromise(){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      res('what the Hell');
    }, 1000)
  })
}

//함수 호출 방법
// callPromise('Kim').then(function(name){
//   console.log(`${name} 반가워`);
//   return backPromise()
// }).then(function(txt){
//   console.log(`${txt}을 실행했군요`);
//   return hellPromise()
// }).then(function(msg){
//   console.log(msg);
// })


//async, await 사용법
async function exec(){
  const name = await callPromise('Kim');
  console.log(`${name} 반가워`);
  const txt = await backPromise();
  console.log(`${txt}을 실행했군요`);
  const msg = await hellPromise();
  console.log(msg);
}
exec();