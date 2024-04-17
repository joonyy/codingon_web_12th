const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views','./views');
app.use('/static', express.static(__dirname+'/static'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(session({
  secret:'secretKey',
  resave:false,
  saveUninitialized:false,
  cookie:{
    httpOnly:true,
    maxAge:60*1000,
  }
}))

const userInfo = {id:'banana', pw:'1234'};
let isLoggedIn = false;

app.get('/',(req,res)=>{
  console.log('req.session > ',req.session)
  if(!isLoggedIn){
    res.render('index', {isLoggedIn:isLoggedIn});
  }
  else{
    res.render('index', {isLoggedIn:isLoggedIn, userInfo:userInfo});
  }
})

app.get('/login',(req,res)=>{
  res.render('login', {isLoggedIn:isLoggedIn})
})

app.post('/login',(req,res)=>{
  if(req.body.id!==userInfo.id) res.send('아이디를 확인하세요!');
  else{
    if(req.body.pw!==userInfo.pw) res.send('비밀번호를 확인하세요!')
    else{
      req.session.name = req.body.id;
      req.session.pw = req.body.pw;
      isLoggedIn=true;
      req.session.isLoggedIn = isLoggedIn;
      res.redirect('/');
    }
  }
})

app.get('/logout',(req,res)=>{
  req.session.destroy(err =>{
    if(err){
      console.log(err);
      res.send('error났어유');
    }
    isLoggedIn=false;
    res.redirect('/');
  })
})

app.listen(PORT, ()=>{
  console.log(`${PORT}번 포트에서 서버 실행중`)
})