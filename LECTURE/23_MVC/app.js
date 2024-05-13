const express=require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/static', express.static(__dirname+"/static"));

//미들웨어로 사용
const indexRouter = require('./routes/index');
app.use('/',indexRouter);

app.get('*',(req,res)=>{
  res.render('404');
})

app.listen(8080, function(){
  console.log('8080번 포트에서 서버 실행중 . . .')
})