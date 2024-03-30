const express =require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views','./views');

app.get('/', (req,res)=>{
  res.render('index', {title:"Loginform"})
})

app.post('/result', (req,res)=>{
  console.log(req.body);
  res.render('result', {title:'form', userInfo:req.query});
})

app.listen(8080, ()=>{
  console.log('8080번 포트에서 서버 실행중');
})