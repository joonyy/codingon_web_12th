const express = require('express');
const app = express();
const mysql = require('mysql2');

app.set('view engine', 'ejs');
app.set('views', 'views');

const conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"12345678",
  database:"kdt"
})

app.get('/', (req,res)=>{

let sql = "select * from customer";
conn.query(sql, function(err, rows, fields){
  if(err){
    console.log('연결 실패');
    res.status(500).send('Internal Server Error다');
  }else{
    res.render('index' ,{mydata: rows})
  }

})

// conn.end();
})

app.listen(8000, ()=>{
  console.log('8000번 포트에서 서버 + mysql 실행중...');
});