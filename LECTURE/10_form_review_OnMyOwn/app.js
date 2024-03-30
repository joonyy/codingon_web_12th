const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req,res)=>{
  console.log('루트 페이지에서 응답함');
  res.render('index', {title:"LoginForm"});
})

app.get('/login', (req,res)=>{
  console.log('login에서 get으로 요청');
  res.render('result', {title:"결과화면", userInfo:req.query});
})

app.post('/login', (req,res)=>{
  console.log('login에서 post 방식으로 요청')
  res.render('result', {title:"결과화면", userInfo:req.body});
})

app.post('/js-form-check', (req,res)=>{
  console.log(req.body);
  res.send('js validation 성공!')
})

app.listen(8080, ()=>{
  console.log('8080번 포트에서 서버 실행중!');
})