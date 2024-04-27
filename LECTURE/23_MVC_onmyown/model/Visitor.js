const mysql = require('mysql2')

const conn = mysql.createConnection({
  host:'localhost', 
  user:'root',
  password:'12345678',
  database:'kdt',
})

//전체 목록 조회
exports.getAllVisitors = (cb) => {
 conn.query(`SELECT * from visitor`,(err,rows)=>{
  cb(rows);
  }) 
}

//데이터 추가
exports.AddVisitor = (data, cb) =>{
  const sql =`INSERT INTO visitor (name, comment) VALUES (?,?)`;
  const values = [data.name,data.comment];
  conn.query(sql,values,(err,rows)=>{
    cb(rows.insertId);
  })
}

//1명의 방문자
exports.showOneVisitor = (id, cb) =>{
  const sql = `SELECT * FROM kdt.visitor WHERE id=?`;
  conn.query(sql,id, (err,rows)=>{
    if(err) throw err;
    cb(rows[0]);
  })
}

//데이터 수정
exports.patchContent = (data,cb)=>{
  const sql = `UPDATE visitor SET name=?, comment=?WHERE id=?`;
  const values = [data.name, data.comment, data.id];

  conn.query(sql, values,(err,rows)=>{
    cb(rows);
  })
}

//데이터 삭제
exports.deleteVisitor = (cb) =>{
  const sql = `DELETE FROM visitor WHERE id=?`;
  conn.query(sql,id,(err,rows)=>{
    cb(rows);
  })
}