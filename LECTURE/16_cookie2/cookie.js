const express =require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views','./views');

//cookie-parser는 미들웨어로 등록해서 사용해야 한다!
//app.use(cookieParser())

app.use(cookieParser('secretKey'));

//cookie에 사용될 내용을 설정하기
const cookieConfig = {
  MaxAge : 60*1000,
  httpOnly:true,
  signed:true,
}

app.get('/', (req,res)=>{
  res.render('cookie')
})

app.get('/setCookie',(req,res)=>{
  //쿠키이름, 쿠키값, 옵션
  res.cookie('myCookie','cookiegood',cookieConfig);
  res.send('쿠키설정 완료');
})

app.get('/getCookie',(req,res)=>{
  console.log('얻어온 쿠키 : ', req.cookies);
  console.log('얻어온 암호화된 쿠키 : ', req.signedCookies);
})

app.get('/clearCookie',(req,res)=>{
  res.clearCookie('myCookie','cookiegood');
  res.send('clear Cookie');
})

/**
 * 1.'cookie-parser' 사용하기 
 * -> const cookieParser = require('cookie-parser');
 * 2.app.use(cookieParser()) 등록하기 
 * -> app.use(cookieParser());
 * 3. res.cookie(이름, 값, 옵션) => 쿠키 설정
 * -> res.cookie('myCookie','cookiegood',cookieConfig);
 * 4.  쿠키값 확인하기
 * -> req.cookies()
 * 5. res.clearCookie(이름, 값, 옵션)
 * 
 * 암호화 되는 경우
 * 2. app.use(cookieParser('문자열'))
 * 3. 옵션에 signed:true 추가하기
 * 4. req.signedCookies 객체에서 확인할 수 있다.
 */


app.listen(8000,()=>{
  console.log('8000번 포트에서 서버 실행중...');
})