const express = require('express');
const app = express()
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/',(req,res) =>{
  res.render('index', {title:"home"});//index.ejs라고 쓰지 않아도 된다. app.set(~~, 'ejs'라고 했으니깐!)
})

app.get('/about', (req,res)=>{
  res.render('about', {title:"about"});
})

app.get('/create',(req,res)=>{
  res.render('create',{title:"create"});
})

app.use((req,res)=>{
  res.status(404).render('404');
})

app.listen(PORT, ()=>{
  console.log(`server is running on PORT ${PORT}`)
})