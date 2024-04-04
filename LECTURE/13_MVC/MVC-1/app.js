const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const indexRouter = require('./routes/index');
app.use('/',indexRouter);

const userRouter = require('./routes/user');
app.use('/user', userRouter);

/*
app.get('*', (req,res) =>{
  res.status(404).render('404'); //미들웨어는 순차적으로 검색하게 된다! 
  //그러므로, app.get'*'을 통해 전부 다 에러로 보내버리면, 여기서 끊길 수밖에 없다.
}) */
app.get('/',(req,res)=>{
  res.render('index');
})

app.get('/user', (req,res)=>{
  res.render('user');
})

app.get('*', (req,res) =>{
  res.status(404).render('404');
})

app.listen(8000, ()=>{
  console.log('8000번 포트에서 서버 실행중...');
})