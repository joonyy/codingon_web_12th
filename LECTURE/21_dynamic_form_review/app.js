const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
  res.render('index');
})

app.get('/axios',(req,res)=>{
  res.render('practice');
})

app.get('/axios1', (req,res)=>{
  console.log(req.query);
  res.send(req.query);
})

app.listen(3000, ()=>{
  console.log('3000번 포트에서 서버 실행중 . . .');
})