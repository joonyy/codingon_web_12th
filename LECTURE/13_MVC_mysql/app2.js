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

let sql = "insert into customer (custid, custname, addr, phone,birth) value(?,?,?,?,?) ";
var values = ['peach', '홍길동','마포구에 살아요', '01011111111','2024-04-05'];
conn.query(sql, values, function(err, rows, fields){ //query문은 sql문을 실행시킬 때 2번째 매개변수를 값으로 활용한다.
  if(err){
    console.log(err);
    res.status(500).send('Internal Server Error다');
  }
})
})

app.listen(8000, ()=>{
  console.log('8000번 포트에서 서버 + mysql 실행중...');
});