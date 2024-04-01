const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views','views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
  res.render('index');
})

app.get('/')

app.listen(8080, ()=>{
  console.log('8080번 포트에서 서버 실행중!');
})