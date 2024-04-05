const express = require('express');
const app = express();
const PORT = 8000;
const path = require('path');



app.set('view engine', 'ejs');
app.set('views','views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/uploads', express.static(__dirname+'/uploads'));

const indexRouter = require('./routes/index');
app.use('/',indexRouter);

const uploadsRouter = require('./routes/uploads');
app.use('/uploads',uploadsRouter);

app.listen(PORT, ()=>{
  console.log(`${PORT}번 포트에서 서버 실행중`);
})