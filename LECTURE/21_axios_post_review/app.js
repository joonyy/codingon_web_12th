const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views','./views');

app.get('/',(req,res)=>{
  res.render('');
})
const user ={
  userId: '홍길동',
  userPw:'1234'
}

app.post('/axiosPost',(req,res)=>{
  if(req.body.userId ===user.userId){
    if(req.body.userPw ===user.userPw)  res.send('로그인 성공!');
    else{
      res.send('비밀번호가 틀렸습니다.');
    }
  }else res.send('아이디가 틀렸습니다 ㅋㅋ ');

})
app.get('*',(req,res)=>{
  res.render('404');
})

app.listen(8000, ()=>{
  console.log('8000번 포트에서 서버 실행중 . . .');
})