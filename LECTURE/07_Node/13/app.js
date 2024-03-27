const express = require('express');

const app = express();

app.listen(8080, ()=>{
  console.log("8080번 포트로 서버 실행중");
});

app.get('/', (req,res)=>{
  res.send('<h2> Home Page express</h2>');
});

app.get('/about', (req,res)=>{
  res.send('<h2> about Page express</h2>')
})