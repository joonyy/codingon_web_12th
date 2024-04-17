const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views','./views');

//첫 화면
app.get('/', (req,res)=>{
  res.render('session');
});

//secure : 값을 true로 할 시, https에서만 세션을 주고 받을 수 있다.
//secret : 안전하게 쿠키를 전송하기 위한 쿠키 서명값(세션 발급 시 사용하는 키).
//resave : 세션에 수정사항이 생기지 않더라도, 매 요청마다 세션을 다시 저장할 것인지 결정. false 권장
//saveUninitialized : 세션에 저장할 내용이 없더라도 처음부터 세션을 생성할지 설정.
//httpOnly : 웹서버를 통해서만 쿠키에 접근 가능
//maxAge : 쿠키 생명주기
//cookie()에 maxAge를 넣는다.

app.use(session({
  secret:'mySessionSecret',
  resave:false,
  saveUninitialized:true,
  cookie:{
    httpOnly:true,
    maxAge : 60 * 1000,
  }
}))

//세션 설정하기
app.get('/set',(req,res)=>{
  req.session.name = "홍길동";
  res.send('세션 설정 완료');
})

app.get('/name',(req,res)=>{
  console.log(req.session.name);
  console.log(req.sessionID);
  console.log('req.session ==> ',req.session);
  res.send({id:req.sessionID, name:req.session.name});
})

app.get('/destroy',(req,res)=>{
  req.session.destroy(err =>{
    if(err) {
      console.log('err');
      res.send('failed');
    }
    res.redirect('/name');
  })
})

app.listen(PORT, ()=>{
  console.log(`${PORT}번 포트에서 서버 실행중 . . .`)
})