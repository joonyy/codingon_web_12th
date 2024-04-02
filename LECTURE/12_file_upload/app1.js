const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views','./views')


const harddisk = multer.diskStorage({
  destination:(req,file,cb)=>{
    console.log('disk Storage');
    cb(null,'download');
  },
  filename:(req,file,cb)=>{
    const ext = path.extname(file.originalname)
    console.log('file.originalname', file.originalname);
    console.log('ext ==>', ext);
    cb(null,file.originalname,ext);
  }
})

const example = multer({storage:harddisk});


app.get('/', (req,res)=>{
  res.render('form1')
})

app.post('/upload2',example.single('demo'),(req,res)=>{

})

app.listen(8000, ()=>{
  console.log('8000 서버 실행중')
})