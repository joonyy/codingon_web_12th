//서버를 실행한다.
const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({dest:'download/'})
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req,res)=>{
  res.render('form');
})

app.post('/upload',upload.single('demo'),(req,res)=>{
  req.file = req.file.originalname;
  console.log('오리지널 이름 ', req.file)
  res.send('업로드 성공!');
})

app.listen(PORT, ()=>{
  console.log(`${PORT}번 포트에서 서버 실행중`);
})