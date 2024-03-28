function call(name) {
  return new Promise(function(res,rej){
    setTimeout(function(){
      res(name);
    },1000);
  })
}

function back(txt){
  return new Promise(function(res,rej){
    setTimeout(function(){
      res('back');
    },1000);
  })
}

function hell(){
  return new Promise(function(res,rej){
    setTimeout(function(){
      res('callback hell');
    },1000);
  })
}
//promise.then으로 변경된 함수
call('kim')
    .then((name) => {
        console.log(`${name} 반가워!`);
        return back();
    }).then((txt) => {
        console.log(`${txt}을 실행했구나!`);
        return hell();
    }).then((msg) => {
        console.log(msg);
    })
    
//async/await로 변겅된 함수

// async function callToPromise(){
//   const name = await call('Kim');
//   console.log(`${name} 반가워!`);
//   const call_back = await back(name);
//   console.log(`${call_back}을 실행했구나!`);
//   const msg = await hell(call_back);
//   console.log(msg);
// }
// callToPromise();
// /**/