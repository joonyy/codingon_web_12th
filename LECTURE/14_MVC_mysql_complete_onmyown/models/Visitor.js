const mysql = require('mysql2');

const conn = mysql.createConnection({
  host:"localhost",
  user:"user",
  password:"12345678",
  database:'kdt'
})

exports.allVisitorsList = (cb) =>{
  conn.query(`SELECT * FROM visitor`, (err,rows) =>{
  cb(rows);
  })
}

exports.postAddVisitor = (data,cb) =>{
  const sql = "INSERT INTO visitor (name,comment) VALUES (?,?)";
  const values = [data.name, data.comment];
  conn.query(sql, values,(err,rows)=>{
    cb(rows.insertId);
  })
}

exports.getShowAvisitor = (id,cb) =>{
  const sql = "SELECT * FROM visitor where id=?";
  conn.query(sql,id,(err,rows)=>{
    cb(rows[0]);
  })
}

exports.patchContent = (data,cb) =>{
  const sql = "UPDATE visitor SET name=?, comment = ? WHERE =?";
  const values=[data.name, data.comment, data.id];
  conn.query(sql, values, (err, rows)=>{
    cb(rows);
  })
}
exports.deletedb = (id,cb) =>{
  const sql = "DELETE FROM visitor WHERE id= ?";
  conn.query(sql,[id],(err,rows) =>{
    cb(rows);
  })
}