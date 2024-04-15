const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine','ejs');
app.set('views','./views');

app.use(cookieParser('secretKey'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cookieParser());
const cookieConfig = {
  maxAge : 24 * 60 * 60,
}
app.get('/', (req,res)=>{
  res.render('index', {popup : req.cookies.popup})
})

app.post('/setCookie', (req,res)=>{
  res.cookie('popup','hide',cookieConfig);
  res.send('쿠키 설정 성공');
})

app.listen(PORT, ()=>{
  console.log(`${PORT}번 포트에서 서버 실행중 . . .`);
})