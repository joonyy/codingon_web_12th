const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get('/', (req,res)=>{
  console.log('/루트에서 들어옴');
  res.render('index');
})

app.get('/login', (req,res) =>{
  console.log('로그인 페이지에서 옴')
  console.log(req.query);
  res.render('result',{title:'GET 요청', userInfo : req.query});
})

app.listen(3000, ()=>{
  console.log('3000번 포트에서 서버 실행중...');
})