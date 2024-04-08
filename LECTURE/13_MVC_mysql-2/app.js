const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use('/static', express.static(__dirname+"/static"));

const indexRouter = require('./routes/index');
app.use('/',indexRouter);

app.get('*', (req,res)=>{
  res.status(404).render('404');
})

app.listen(PORT, ()=>{
  console.log(`${PORT}번 포트에서 서버 실행중`)
})