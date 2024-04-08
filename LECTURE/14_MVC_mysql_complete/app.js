const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/static', express.static(__dirname+"/static"));

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.get('*', (req,res)=>{
  res.status(404).render('404');
})

app.listen(3000, ()=>{
  console.log('3000번 포트에서 mysql 서버 실행중...');
})