const express= require('express');
const app =require('app');

const path = require('path');
const multer = require('multer');

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.listen(8000, ()=>{
  console.log('8000번 포트에서 서버 실행중 . . .')
})