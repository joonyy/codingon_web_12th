const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req,res) =>{
  res.render('index',{title:"form"});
})

app.get('/result',(req,res)=>{
  res.render('result',{title:"result", userInfo:req.query})
})

app.listen(8000, ()=>{
  console.log('8000번 포트에서 서버 실행중');
});