const express =require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views','./views');

app.get('/', (req,res)=>{
  res.render('cookie');
})

const cookieConfig={
  maxAge : 60*1000,
  httpOnly : true,
  signed : true,
}

const cookieConfig2={
  path:'/abc',
  maxAge : 60*1000,
  httpOnly : true,
}

app.use(cookieParser('secretKey'));

app.get('/setCookie', (req,res)=>{
  res.cookie('myCookie','cookiegood',cookieConfig);
  res.send('쿠키 설정완료');
})

app.get('/getCookie', (req,res)=>{
  console.log('얻어온 암호화되지 않은 쿠키 : ',req.cookies);
  console.log('얻어온 암호화된 쿠키 : ',req.signedCookies);
})

app.get('/abc', (req,res)=>{
  res.cookie('abc-page','abc page cookie', cookieConfig2);
  res.render('another')
})

app.get('/clearCookie', (req,res)=>{
  res.clearCookie('myCookie', 'cookiegood',cookieConfig);
  res.send('clear cookie!');
})

app.listen(8000, ()=>{
  console.log('8000번 포트에서 서버 실행중 . . . ');
})