const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req,res)=>{
  res.render('index',{title:"loginForm"});
})
app.get('/login', (req,res)=>{
  console.log('login에서 요청');
  res.render('result',{title:"결과화면", userInfo : req.query})
})

app.listen(8080, ()=>{
  console.log('8080번 포트에서 서버 실행중...');
})