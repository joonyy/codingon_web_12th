const express= require('express')
const app = express()
const PORT =8000
app.set('view engine' ,'ejs');
app.set('views','./views')


app.use(express.urlencoded({ extended:true}));
app.use(express.json())

app.get('/', (req,res)=>{
  res.render('main')
})

// test1, test2로 이동
app.get('/test1', (req,res)=>{
  res.render('test1')
})

 
app.get('/test2', (req,res)=>{
  res.render('test2')
})

app.get('/test1-axios', (req,res)=>{
  console.log(req.query);
  res.send(req.query)

})

// 승인된 사용자인지를 검증하기 위해
//  저장된 정보를 사용한다
let userId="Hong";
let userPw ="1234";

app.post('/test2-axios',(req,res)=>{
  console.log('/test2-axios', req.body);
 if(userId ===req.body.userId && userPw === req.body.userPw){

  res.send({userInfo: req.body, isSuccess : true })
 } else {
  res.send({isSuccess : false})
 }

})





app.listen(PORT, ()=>{
  console.log(`${PORT} 에서 서버 실행 중`)

})