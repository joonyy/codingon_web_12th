const express = require('express');
const app = express();
const mysql = require('mysql2');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"12345678",
  database:"kdt"
})
let sql = "select * from customer";
conn.query( sql , function(err, rows, fields){
  if(err) console.log(err.message);
  else {
    console.log('연결성공');
    console.log(rows[0].custname);//rows = 튜플(객체)로 이루어진 배열.
    console.log(fields[0]);
  }
})

conn.end();

app.listen(8000, ()=>{
  console.log('8000번 포트에서 서버 + mysql 실행중...');
});