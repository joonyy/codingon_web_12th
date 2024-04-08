const mysql = require('mysql2');
const conn =  mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"12345678",
  database:"kdt"
});

exports.getVisitors = (cb) =>{
  conn.query('select * from visitor',(err,rows) =>{
    if(err) throw err;
    console.log(' model > Visitor.js > getVisitors', rows);
    cb(rows);
  })
}