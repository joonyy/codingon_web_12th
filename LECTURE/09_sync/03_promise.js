//Promise 사용법
//1.
/*
const p = new Promise((resolve,reject) =>{
  resolve(12);
  // reject(new Error('message'));
})
// p.then(((result)=>{ console.log(`결과는 : ${result}`)}));
p.then((result=>console.log(`결과는 : ${result}`)));
*/

//2.
/*
const p = new Promise((res,rej) =>{
  setTimeout(()=>{
    res(1)
  },2000)
})

p.then(result => console.log('2초뒤 결과는 : ', result));
*/
//3. 
const p = new Promise((res,rej) =>{
  setTimeout(()=>{
    rej(new Error('OMG'))
  },2000)
})

p.then(result => console.log('2초뒤 결과는 : ', result))
.catch(err => console.log("에러 발생", err.message));
//p.then().catch() -> 체이닝 방식.