const mysql = require('mysql2');
//mysql 접속정보, connection 생성

const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'12345678',
  database:'kdt',
})

//전체 목록을 보여주는 쿼리
exports.allVisitorsList = (cb) =>{
  conn.query(`SELECT * from visitor`, (err,rows)=>{
    console.log("SELECT * from visitor ==> ",rows);
    cb(rows);
  });  
}

//폼에서 보내온 데이터 추가하기
exports.postAddVisitor = (data,cb) =>{
  const sql = "INSERT INTO visitor (name, comment) VALUES (?,?)";
  const values = [data.name, data.comment];
  conn.query(sql, values,(err,rows)=>{
      console.log('폼에서 보내준 데이터를 테이블에 추가');
      cb(rows.insertId);
  });
}

// 1명의 방문자 보기
exports.getShowAvisitor = (id,cb) =>{
  console.log('1명 보기', id);
  const sql = "SELECT * FROM kdt.visitor WHERE id=?";
  conn.query(sql,id,(err,rows)=>{
    if(err) throw err;
    cb(rows[0]);
  })
}

//수정 버튼 클릭
exports.patchContent = (data, cb) =>{
  const sql = "UPDATE visitor SET name=?, comment=? WHERE id= ?";
  const values = [data.name,data.comment,data.id];

  conn.query(sql, values,(err,rows)=>{
    cb(rows);
  })
}

exports.deletedb = (id, cb)=>{
  const sql = "DELETE FROM visitor WHERE id=?";
  conn.query(sql, id, (err,rows)=>{
    cb(rows);
  })
}