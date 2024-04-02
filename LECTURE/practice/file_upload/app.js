const express = require('express');
const app = express();
const PORT = 8000;
const path = require('path');

//multer 설정
const multer = require('multer');

const uploadDetail = multer({
  storage:multer.diskStorage({
    destination(req,file,done){
      done(null, 'uploads/');
    },
    filename(req,file,done){
      file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf-8');
      const ext = path.extname(file.originalname);//확장자 가져오기
      done(null, file.originalname);
    },
  }),
  limits:{fileSize : 5 * 1024 * 1024}, //5MB
});

app.set('view engine', 'ejs');
app.set('views','views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/uploads', express.static(__dirname+'/uploads'));

app.get('/', (req,res)=>{
  res.render('form');
})

app.post('/uploads',uploadDetail.single('pic'),(req,res)=>{
  console.log(req.body);
  res.render('result',{filename:req.file.originalname,id:req.body.ID, password:req.body.PW, name:req.body.name, age:req.body.age});
})

app.listen(PORT, ()=>{
  console.log(`${PORT}번 포트에서 서버 실행중`);
})