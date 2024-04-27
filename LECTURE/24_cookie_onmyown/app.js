const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.set('view engine','ejs');
app.set('views','./views');

app.use(cookieParser('mySecretKey'));

app.get('/',(req,res)=>{
  res.render('index');
})

const cookieConfig={
  httpOnly:true,
  maxAge:60*1000,
}

app.get('/setCookie',(req,res)=>{
  res.cookie('myCookie','IcanSeeValue',cookieConfig);
  res.send('set cookie!')
})

app.get('/getCookie',(req,res)=>{
  res.send(req.headers.cookie);
})

app.get('/clearCookie',(req,res)=>{
  res.clearCookie('myCookie','IcanSeeValue',cookieConfig);
  res.send('clear Cookie!');
})

app.listen(8000,()=>{
  console.log('8000번 포트에서 서버 실행중 . . . ')
})