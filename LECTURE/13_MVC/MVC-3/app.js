const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views','./views');

const indexRouter = require('./routes/index');
app.use('/', indexRouter);
const userRouter = require('./routes/user');
app.use('/user',userRouter);

app.listen(PORT, ()=>{
  console.log(PORT,'번 포트에서 서버 실행중...');
})