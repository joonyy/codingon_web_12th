// TODO: visitor 모델을 정의
const Visitor = (Sequelize, DataTypes)=>{

 const model = Sequelize.define(
   'visitor',{
      id : {type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      name:{   
         type: DataTypes.STRING(10),
         allowNull: false
      },
      comment:{
         type: DataTypes.TEXT('medium'),
      }
   },
   {
      tableName:'visitor2',
      freezeTableName: true,
      timestamps: false,
   }

 )
return model;
}
module.exports = Visitor;

// const mysql = require('mysql2');

// const conn=mysql.createConnection({
//    host :'localhost',
//    user:'root',
//    password:'1234',
//    database:'kdt'
// })

// // 전체목록을 보여주는 쿼리
// exports.allVisitorsList =(cb)=>{
//    conn.query(`SELECT * FROM  visitor`, (err, rows)=>{
//       console.log('select *')
//       console.log(rows)
//       cb(rows)
//    })
// }

// // 폼에서 보여온 데이터 추가하기
// exports.postAddVisitor = (data,cb) =>{
//    console.log("----> ", data)
//    const sql ="INSERT INTO visitor (name, comment) VALUES (?,?)";
//    const values =[data.name, data.comment];
//    conn.query(sql, values,(err,rows)=>{
//       console.log('폼에서 보내준 데이터 테이블에 추가')
//       cb(rows.insertId)
//    })
// }
 
// // 폼에서 1명의 방문자 보기
// exports.getShowAvisitor = (id, cb)=>{
//   console.log('model > Visitor.js > getShowAvisitor', id)

//    const sql = 'SELECT * FROM kdt.visitor where id=?';
//    conn.query(sql, id, (err, rows) => {
//       if (err) throw err;
//       console.log("rows ---",rows)
//       cb(rows[0]);
//   })
// }

// // 수정버튼 후 바뀐내용으로 변경
// exports.patchContent = (data, cb)=>{
//    console.log('changeContent : ', data)
//    const sql ="UPDATE visitor SET name =? , comment =? WHERE = ?";
//    const values=[data.name, data.comment, data.id]

//    conn.query(sql, values, (err, rows)=>{
//       console.log('update > ', rows);
//       cb(rows)
//    })

// }

// // 목록삭제
// exports.deletedb =(id,cb)=>{
//    console.log( `${id} 행을 삭제합니다  `)
//    const sql ="DELETE FROM visitor  WHERE id = ?";
//    conn.query(sql,id, (err,rows)=>{
//       cb(rows)
//    } )
// }