const express =require('express');
const app = express();
const db = require('./models/index')

app.set('view engine', 'ejs');
app.set('views','./views');
app.use('/static',express.static(__dirname+"/static"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const indexRouter = require('./routes/index');
app.use('/',indexRouter);

const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.get('*', (req,res)=>{
  res.status(404).render('404');
})

db.sequelize.sync({force:false}).then(()=>{
  //force:false는 테이블이 없다면 생성한다는 뜻이다.
});

app.listen(8000, ()=>{
  console.log('8000번 포트에서 서버 실행중...');
})