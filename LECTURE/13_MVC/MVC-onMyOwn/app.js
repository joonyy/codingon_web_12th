const express =require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

app.use('/', indexRouter);

app.use('/user', userRouter);

app.get('*',(req,res)=>{
  res.status(404).render('404');
})

app.listen(8000, ()=>{
  console.log('8000번 포트에서 서버 실행중');
})