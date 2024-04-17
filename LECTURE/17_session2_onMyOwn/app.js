const express = require('express')
const session =require('express-session');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views','./views');
app.set(express.urlencoded({extended:true}));
app.set(express.json());

app.use(session({
  secret:'secretKey',
  resave:false,
  saveUninitialized:false,
  cookie:{
    httpOnly:true,
    maxAge:60*1000,
  }
}))

const userInfo = {id : banana, pw:'1234'};

app.get('/',(req,res)=>{

})

app.get('/login',(req,res)=>{
  
})

app.post('/login',(req,res)=>{
  
})

app.get('/logout',(req,res)=>{
  
})


app.listen(8000, ()=>{
  console.log(`${PORT}번 포트에서  서버 실행중 . . .`)
})