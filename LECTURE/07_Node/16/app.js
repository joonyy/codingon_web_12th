const { publicDecrypt } = require('crypto');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req,res) =>{
  res.render('index', {title:"myHome"});
})

app.get('/about', (req,res) =>{
  res.render('about', {title:"ABOUT"});
})

app.get('/create', (req,res) =>{
  res.render('create', {title:"CREATE"});
})


app.listen(8080, ()=>{
  console.log('8080번 포트에서 서버 실행중');
})