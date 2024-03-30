const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.set('views', './views');

//req.body 객체를 해석할 수 있는 body-parser 미들웨어를 등록한 것.
app.use(express.urlencoded({extended:true}));
//post 요청으로 돌어오는 모든 형식의 데이터를 parsing 해라.
app.use(express.json());//json 형식으로 데이터를 주고받겠다!

//url 연결 시 실행된다. index.ejs 파일을 불러와 보여준다.
app.get('/', (req,res)=>{
  console.log('/루트에서 왔어요');
  res.render('index');
})

//GET 방식으로 처리하는 코드.
app.get('/login', (req,res) =>{
  console.log('get 방식으로 요청됨');
  console.log('req.query ==> ',req.query);
})





app.listen(8000, ()=>{
  console.log('server is running...');
})