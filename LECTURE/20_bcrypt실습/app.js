const express =require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const db = require('./models');
const PORT = process.env.PORT || 8888;

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret:"mySession",
    resave:false,
    saveUninitialized:true,
    cookie:{
      httpOnly:true,
      maxage:60*1000 // 1분
    }
  })
);

const userRouter = require('./routes/user');
app.use('/', userRouter);

app.get('*',(req,res)=>{
  res.render('404');
})

db.sequelize.sync({force:false}).then(()=>{ //force 뜻 : 없으면 만들고 있으면 만들지 말아주세요~!
  app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
  })
})