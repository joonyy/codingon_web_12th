const express = require('express');
const cookieParser = require('cookie-parser');
const app =express();

app.set('view engine', 'ejs');
app.set('views', './views');

const cookieConfig2={
  path:'/abc',
  maxAge: 60,
  httpOnly:true,
}

app.get('/', (req,res)=>{
  res.cookie('abc-page', 'abc page cookie', cookieConfig2);
  res.render('another');
})

app.listen(8000,()=>{
  console.log('8000번 포트에서 서버 실행중...')
})