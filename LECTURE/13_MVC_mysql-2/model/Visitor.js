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

// 새로 저장한 것들
exports.postVisitor = (data,cb) =>{
  console.log('model > Visitor.js > postVisitor');
  const sql = `INSERT INTO visitor (name, comment) VALUES (?, ?)`;
  const values = [data.name,data.comment];
  conn.query(sql,values,(err,rows) =>{
    if(er) throw err;
    console.log("1----> ");
    cb(rows.insertId);
  })
}

exports.getVisitor = (id,cb) =>{
  const sql = `SELECT * FROM visitor WHERE id=?`;
  conn.query(sql,[id], (err,rows)=>{
    if(err) throw err;
    console.log('2');
    cb(rows[0])
  })
}

exports.patchVisitor = (data,cb) =>{
  const sql = "UPDATE visitor SET name=? , comment =? where id = ?";
  const values = [data.name, data.comment, data.id];
  conn.query(sql,values,(err,rouws)=>{
    if(err) throw err;

    console.log('3');
    cb(rows);
  })
}
exports.deleteVisitor = (id,cb) =>{
  const sql = "DELETE FROM visitor WHERE id= ?";
  conn.query(sql,[id],(err,rows) =>{
    if(err) throw err;
    console.log('4');
    cb(rows);
  })
}