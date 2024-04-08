const mysql = require('mysql2');

const conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"12345678",
  database:"kdt"
});

exports.allVisitorsList = (cb) =>{
  conn.query(`SELECT * FROM visitor`, (err,rows)=>{
    if(err) throw err;
    console.log("MODELS",rows);
    cb(rows);
  })
}
//내영 폼에서 보내온 데이터 추가하기
exports.postAddVisitor = (data,cb) =>{
  console.log('--->',data);
  const sql = "INSERT INTO visitor (name,comment) VALUES (?,?)";
  const values = [data.name, data.comment];
  conn.query(sql, values, (err,rows)=>{
    console.log('폼에서 보내준 데이터를 테이블에 추가');
    cb(rows.insertId);
  })
}

// 폼에서 1명의 방문자 보기
exports.getShowAvisitor = (id, cb)=>{
  console.log('model > Visitor.js > getShowAvisitor', id)
   const sql = 'SELECT * FROM kdt.visitor where id=?';
   conn.query(sql, id, (err, rows) => {
      if (err) throw err;
      console.log("rows ---",rows)
      cb(rows[0]);
  })
}

// 수정버튼 후 바뀐내용으로 변경
exports.patchContent = (data, cb)=>{
  console.log('changeContent : ', data)
  const sql ="UPDATE visitor SET name =? , comment =? WHERE = ?";
  const values=[data.name, data.comment, data.id]
  conn.query(sql, values, (err, rows)=>{
    console.log('update > ', rows);
    cb(rows)
  })
}
exports.deletedb = (id,cb) =>{
  const sql = "DELETE FROM visitor WHERE id= ?";
  conn.query(sql,[id],(err,rows) =>{
    if(err) throw err;
    console.log('4');
    cb(rows);
  })
}